import React, { useEffect, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { wpCodeSnippets } from '../data/wpCodeSnippets'
import { wpSnippetsData } from '../data/wpSnippetsData'
import '../App.css'

function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Combine all data sources
  const allPosts = useMemo(() => {
    return [...blogPosts, ...wpCodeSnippets, ...wpSnippetsData]
  }, [])

  // Find post by slug across all data sources
  const post = useMemo(() => {
    return allPosts.find(p => p.slug === slug)
  }, [slug, allPosts])

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0)

    // Handle scroll animation for menu
    const handleScroll = () => {
      const menu = document.querySelector('.legacy-menu')
      if (menu) {
        if (window.scrollY > 100) {
          menu.classList.add('scrolled')
        } else {
          menu.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Enhance code blocks with VS Code-inspired styling
    const enhanceCodeBlocks = () => {
      const preElements = document.querySelectorAll('.post-content pre')

      preElements.forEach((pre) => {
        // Skip if already enhanced
        if (pre.closest('.code-block-container')) return

        // Get language from data attribute or class
        let language = 'code'
        const codeElement = pre.querySelector('code')

        if (codeElement) {
          // Check for language in class (e.g., language-javascript, lang-js)
          const classMatch = codeElement.className.match(/language-(\w+)|lang-(\w+)/)
          if (classMatch) {
            language = classMatch[1] || classMatch[2]
          }
        }

        // Check for data-language attribute
        if (pre.dataset.language) {
          language = pre.dataset.language
        }

        // Get the code content as plain text
        const codeContent = pre.textContent

        // Try to detect language from content if not specified
        if (language === 'code' && codeContent) {
          if (codeContent.includes('<?php') || (codeContent.includes('function ') && codeContent.includes('$'))) {
            language = 'php'
          } else if (codeContent.includes('const ') || codeContent.includes('let ') || codeContent.includes('=>')) {
            language = 'javascript'
          } else if (codeContent.includes('def ') && codeContent.includes(':')) {
            language = 'python'
          } else if (codeContent.includes('<') && codeContent.includes('>') && codeContent.includes('/')) {
            language = 'html'
          } else if (codeContent.includes('.css') || (codeContent.includes('{') && codeContent.includes(':'))) {
            language = 'css'
          }
        }

        // Helper function to escape HTML
        const escapeHtml = (text) => {
          const div = document.createElement('div')
          div.textContent = text
          return div.innerHTML
        }

        // Create container
        const container = document.createElement('div')
        container.className = 'code-block-container'

        // Create header
        const header = document.createElement('div')
        header.className = 'code-block-header'

        // Create language badge
        const languageBadge = document.createElement('div')
        languageBadge.className = 'code-block-language'
        languageBadge.textContent = language

        // Create copy button
        const copyBtn = document.createElement('button')
        copyBtn.className = 'code-copy-btn'
        copyBtn.textContent = 'Copy'
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(codeContent).then(() => {
            copyBtn.classList.add('copied')
            copyBtn.textContent = 'Copied!'
            setTimeout(() => {
              copyBtn.classList.remove('copied')
              copyBtn.textContent = 'Copy'
            }, 2000)
          })
        }

        // Assemble header
        header.appendChild(languageBadge)
        header.appendChild(copyBtn)

        // Create content wrapper
        const contentWrapper = document.createElement('div')
        contentWrapper.className = 'code-block-content'

        // Create new pre/code elements with escaped content
        const newPre = document.createElement('pre')
        const newCode = document.createElement('code')

        // Set the text content (this automatically escapes HTML)
        newCode.textContent = codeContent

        // Preserve the original class for syntax highlighting
        if (codeElement && codeElement.className) {
          newCode.className = codeElement.className
        }

        newPre.appendChild(newCode)
        contentWrapper.appendChild(newPre)

        // Assemble container
        container.appendChild(header)
        container.appendChild(contentWrapper)

        // Replace original pre with enhanced version
        pre.parentNode.replaceChild(container, pre)
      })
    }

    // Run enhancement after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(enhanceCodeBlocks, 100)

    // Update meta tags for SEO
    if (post) {
      document.title = post.seo?.metaTitle || post.title || 'Blog Post'

      // Update or create meta description
      if (post.seo?.metaDescription) {
        let metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', post.seo.metaDescription)
        } else {
          metaDescription = document.createElement('meta')
          metaDescription.name = 'description'
          metaDescription.content = post.seo.metaDescription
          document.head.appendChild(metaDescription)
        }
      }

      // Update or create meta keywords
      if (post.seo?.keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) {
          metaKeywords.setAttribute('content', post.seo.keywords.join(', '))
        } else {
          metaKeywords = document.createElement('meta')
          metaKeywords.name = 'keywords'
          metaKeywords.content = post.seo.keywords.join(', ')
          document.head.appendChild(metaKeywords)
        }
      }

      // Add FAQ Schema markup if FAQs exist
      if (post.faqs && post.faqs.length > 0) {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }

        let schemaScript = document.getElementById('faq-schema')
        if (!schemaScript) {
          schemaScript = document.createElement('script')
          schemaScript.id = 'faq-schema'
          schemaScript.type = 'application/ld+json'
          document.head.appendChild(schemaScript)
        }
        schemaScript.textContent = JSON.stringify(faqSchema)
      }

      // Add Article Schema if available
      if (post.seo.schema) {
        let articleSchema = document.getElementById('article-schema')
        if (!articleSchema) {
          articleSchema = document.createElement('script')
          articleSchema.id = 'article-schema'
          articleSchema.type = 'application/ld+json'
          document.head.appendChild(articleSchema)
        }
        articleSchema.textContent = JSON.stringify(post.seo.schema)
      }
    }

    // Cleanup function to reset title on unmount
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      document.title = 'Shahmir Khan - Research & Product'
      // Remove schema scripts
      const faqSchema = document.getElementById('faq-schema')
      const articleSchema = document.getElementById('article-schema')
      if (faqSchema) faqSchema.remove()
      if (articleSchema) articleSchema.remove()
    }
  }, [post])

  if (!post) {
    return (
      <div className="App">
        <div className="wp-admin-bar">
          <strong>WordPress Admin</strong> • <Link to="/">Back to Home</Link>
        </div>

        <nav className="legacy-menu">
          <div className="legacy-menu-inner">
            <div className="legacy-menu-brand">Shahmir Khan</div>
            <div className="legacy-menu-links">
              <Link to="/#about">About</Link>
              <Link to="/#research">Research</Link>
              <Link to="/#companies">Companies</Link>
              <Link to="/#experience">Experience</Link>
              <Link to="/#skills">Skills</Link>
              <Link to="/#resources">Resources</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <Link to="/#contact" className="legacy-menu-cta">Contact</Link>
          </div>
        </nav>

        <div className="container">
          <article className="post">
            <header>
              <h1 className="post-title">Post Not Found</h1>
            </header>
            <div className="post-content">
              <p>The blog post you're looking for doesn't exist.</p>
              <Link to="/blog" style={{ color: '#0073aa', textDecoration: 'underline' }}>
                ← Back to Blog Archive
              </Link>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // Get related posts (same category, exclude current post)
  const relatedPosts = useMemo(() => {
    if (!post) return []
    return allPosts
      .filter(p => p.category === post.category && p.id !== post.id)
      .slice(0, 3)
  }, [post, allPosts])

  return (
    <div className="App">
      <div className="wp-admin-bar">
        <strong>WordPress Admin</strong> • <Link to="/">Back to Home</Link> • <Link to="/blog">Blog Archive</Link>
      </div>

      <nav className="legacy-menu">
        <div className="legacy-menu-inner">
          <div className="legacy-menu-brand">Shahmir Khan</div>
          <div className="legacy-menu-links">
            <Link to="/#about">About</Link>
            <Link to="/#research">Research</Link>
            <Link to="/#companies">Companies</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#resources">Resources</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <Link to="/#contact" className="legacy-menu-cta">Contact</Link>
        </div>
      </nav>

      <div className="container">
        <article className="post">
          {/* Post Header */}
          <header>
            <div style={{ marginBottom: '15px' }}>
              <span className="blog-category" style={{
                background: '#0073aa',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                {post.category}
              </span>
            </div>

            <h1 className="post-title">{post.title}</h1>

            <div className="post-meta">
              {post.author && <span>By {post.author}</span>}
              {post.author && post.date && <span> • </span>}
              {post.date && (
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              )}
              {post.readTime && (
                <>
                  <span> • </span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </header>

          {/* Post Content */}
          {post.content && (
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          )}

          {/* Post Tags */}
          {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
            <div style={{
              marginTop: '40px',
              paddingTop: '20px',
              borderTop: '1px solid #ddd'
            }}>
              <strong style={{ marginRight: '10px' }}>Tags:</strong>
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="blog-tag"
                  style={{
                    display: 'inline-block',
                    background: 'rgba(0, 115, 170, 0.1)',
                    color: '#0073aa',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    marginRight: '8px',
                    marginBottom: '8px',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{
              marginTop: '60px',
              padding: '30px',
              background: 'rgba(0, 115, 170, 0.05)',
              borderRadius: '8px',
              borderLeft: '4px solid #0073aa'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '25px',
                color: '#0073aa'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {post.faqs.map((faq, index) => (
                  <div key={index} style={{
                    padding: '20px',
                    background: 'white',
                    borderRadius: '6px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '12px',
                      color: '#2c3e50',
                      fontWeight: '600'
                    }}>
                      Q: {faq.question}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#555',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      <strong style={{ color: '#0073aa' }}>A:</strong> {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet Badge */}
          {post.difficulty && (
            <div style={{
              marginTop: '30px',
              padding: '15px',
              background: post.difficulty === 'Beginner' ? 'rgba(46, 204, 113, 0.1)' :
                         post.difficulty === 'Intermediate' ? 'rgba(52, 152, 219, 0.1)' :
                         'rgba(231, 76, 60, 0.1)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: '600',
                background: post.difficulty === 'Beginner' ? '#2ecc71' :
                           post.difficulty === 'Intermediate' ? '#3498db' :
                           '#e74c3c',
                color: 'white'
              }}>
                {post.difficulty}
              </span>
              {post.compatibility && (
                <span style={{ fontSize: '0.9rem', color: '#666' }}>
                  Compatible with {post.compatibility}
                </span>
              )}
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div style={{
              marginTop: '60px',
              padding: '30px',
              background: 'rgba(212, 175, 55, 0.05)',
              borderRadius: '8px',
              borderLeft: '4px solid #d4af37'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '25px',
                color: '#0073aa'
              }}>
                Related Articles
              </h2>

              <div style={{
                display: 'grid',
                gap: '20px'
              }}>
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} style={{
                    padding: '20px',
                    background: 'white',
                    borderRadius: '6px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.2s ease'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '10px'
                    }}>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        style={{
                          color: '#0073aa',
                          textDecoration: 'none'
                        }}
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    {relatedPost.excerpt && (
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '10px'
                      }}>
                        {relatedPost.excerpt.substring(0, 120)}...
                      </p>
                    )}
                    {relatedPost.readTime && (
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#999'
                      }}>
                        {relatedPost.readTime}
                      </span>
                    )}
                    {relatedPost.difficulty && (
                      <span style={{
                        fontSize: '0.85rem',
                        marginLeft: '10px',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        background: relatedPost.difficulty === 'Beginner' ? '#10b981' :
                                   relatedPost.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {relatedPost.difficulty}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="contact-info">
          <Link to="/blog" style={{
            display: 'inline-block',
            marginBottom: '20px',
            color: '#0073aa',
            textDecoration: 'underline'
          }}>
            ← Back to Blog Archive
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
