import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts, faqs } from '../data/blogPosts'
import { wpCodeSnippets } from '../data/wpCodeSnippets'
import { wpSnippetsData } from '../data/wpSnippetsData'
import '../App.css'

function BlogArchive() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')

  // Handle scroll animation for menu
  React.useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Combine all data sources into one array
  const allPosts = useMemo(() => {
    return [...blogPosts, ...wpCodeSnippets, ...wpSnippetsData]
  }, [])

  // Get all unique categories from all data sources
  const categories = useMemo(() => {
    const cats = new Set()
    allPosts.forEach(post => {
      if (post.category) cats.add(post.category)
    })
    return ['all', ...Array.from(cats).sort()]
  }, [allPosts])

  // Get all unique tags from all data sources
  const tags = useMemo(() => {
    const tagSet = new Set()
    allPosts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => tagSet.add(tag))
      }
    })
    return ['all', ...Array.from(tagSet).sort()]
  }, [allPosts])

  // Filter posts based on selected category and tag
  let filteredPosts = allPosts

  if (selectedCategory !== 'all') {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory)
  }

  if (selectedTag !== 'all') {
    filteredPosts = filteredPosts.filter(post =>
      post.tags && Array.isArray(post.tags) && post.tags.includes(selectedTag)
    )
  }

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts = {}
    allPosts.forEach(post => {
      const cat = post.category || 'Uncategorized'
      counts[cat] = (counts[cat] || 0) + 1
    })
    return counts
  }, [allPosts])

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

      <div className="container blog-archive-container">
        <article className="post">
          <header className="blog-archive-header">
            <h1 className="post-title">Blog Archive</h1>
            <div className="post-meta">
              WordPress Research, Development & Industry Insights
              <span style={{ marginLeft: '20px', color: '#d4af37', fontWeight: 'bold' }}>
                {filteredPosts.length} of {allPosts.length} articles
              </span>
            </div>
          </header>

          {/* Category Grid */}
          <div className="blog-categories-grid">
            <div
              className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <div className="category-card-name">All Categories</div>
              <div className="category-card-count">{allPosts.length}</div>
            </div>
            {categories.filter(cat => cat !== 'all').map(cat => (
              <div
                key={cat}
                className={`category-card ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="category-card-name">{cat}</div>
                <div className="category-card-count">{categoryCounts[cat] || 0}</div>
              </div>
            ))}
          </div>

          {/* Filter Section */}
          <div className="blog-filters">
            <div className="filter-group">
              <label>Filter by Tag:</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="filter-select"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Tags' : tag}
                  </option>
                ))}
              </select>
            </div>
            <div style={{
              marginLeft: 'auto',
              fontSize: '0.9rem',
              color: '#5a6c7d',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={`${post.slug}-${post.id}`} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  {post.date && (
                    <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  )}
                  {post.difficulty && (
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      background: post.difficulty === 'Beginner' ? '#10b981' :
                                 post.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444',
                      color: 'white'
                    }}>
                      {post.difficulty}
                    </span>
                  )}
                </div>

                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}

                <div className="blog-card-meta">
                  {post.author && (
                    <span className="blog-author">
                      By {typeof post.author === 'string' ? post.author : post.author.name}
                    </span>
                  )}
                  {post.readTime && <span className="blog-read-time">{post.readTime}</span>}
                  {post.compatibility && (
                    <span style={{ color: '#666', fontSize: '0.875rem' }}>
                      {post.compatibility}
                    </span>
                  )}
                </div>

                <div className="blog-card-tags">
                  {post.tags && Array.isArray(post.tags) && post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="blog-tag"
                      onClick={() => setSelectedTag(tag)}
                      style={{ cursor: 'pointer' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  Read Article
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{
              padding: '60px 40px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0, 115, 170, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)',
              borderRadius: '16px',
              marginTop: '40px',
              border: '2px dashed #d4af37'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📭</div>
              <h3 style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '1.5rem' }}>No articles found</h3>
              <p style={{ color: '#5a6c7d', fontSize: '1rem' }}>Try adjusting your filters to see more content.</p>
            </div>
          )}

          {/* FAQs Section */}
          <div style={{ marginTop: '80px', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{
              fontSize: '2.2rem',
              marginBottom: '40px',
              color: '#0073aa',
              borderBottom: '3px solid #d4af37',
              paddingBottom: '15px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Frequently Asked Questions
            </h2>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="contact-info">
          <Link to="/" style={{
            display: 'inline-block',
            marginBottom: '20px',
            color: '#0073aa',
            textDecoration: 'underline'
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArchive
