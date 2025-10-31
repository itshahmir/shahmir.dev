import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { blogPosts } from '../data/blogPosts'
import '../App.css'

function HomePage() {
  const [formData, setFormData] = useState({ email: '' });
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect to initialize animations
  useEffect(() => {
    // Set initial state
    gsap.set('.split-text-title, .split-text-tagline, .split-text-heading', {
      opacity: 0,
      y: 50
    });

    // Create timeline for animations
    const tl = gsap.timeline();

    // Animate elements with simple fade and slide
    tl.to('.split-text-title', {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out'
    })
    .to('.split-text-tagline', {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.split-text-heading', {
      duration: 0.6,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.3');

    // Simple scroll animations for paragraphs
    const paragraphs = document.querySelectorAll('.post-content p');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    }, { threshold: 0.1 });

    paragraphs.forEach(p => {
      gsap.set(p, { opacity: 0, y: 30 });
      observer.observe(p);
    });

    // Handle menu scroll animation
    const handleScroll = () => {
      const menu = document.querySelector('.legacy-menu');
      if (window.scrollY > 100) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('_subject', 'WPCursor Waitlist Signup');
    formDataToSend.append('_next', window.location.href + '#wpcursor');

    try {
      const response = await fetch('https://formspree.io/f/mgvzglgd', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormMessage('✅ Thanks! You\'ve been added to the waitlist.');
        setFormData({ email: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormMessage('❌ Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      <nav className={`legacy-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
        <div className="legacy-menu-inner">
          <div className="legacy-menu-brand">Shahmir Khan</div>
          <div className="legacy-menu-links">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#research" onClick={() => setIsMobileMenuOpen(false)}>Research</a>
            <a href="#companies" onClick={() => setIsMobileMenuOpen(false)}>Companies</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          </div>
          <a href="#contact" className="legacy-menu-cta" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      <div className="container">
        <header className="site-header">
          <h1 className="site-title split-text-title">Shahmir Khan</h1>
          <p className="site-tagline split-text-tagline">Research & Product - Exploring WP, AI & Automation</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/itshahmir" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/itshahmir" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://github.com/pixelabs-wp" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Pixelabs
            </a>
          </div>
        </header>
        
        <article className="post" id="about">
          <header>
            <h2 className="post-title split-text-heading">About</h2>
            <div className="post-meta">Updated October 2025 by Shahmir Khan</div>
          </header>

          <div className="post-content">
            <p>I'm a founder and product engineer who's spent the last few years turning ideas into systems that actually work. Currently, I'm exploring the intersection of AI and automation with Reachwise AI, and tackling Pakistan's informal student housing market through Staezy — a problem I researched through the country's first comprehensive market study.</p>

            <p>Before this, I founded Pixelabs, where my team and I delivered 75+ software projects and built 40+ WordPress plugins in our first year alone, generating over $60K in revenue. I've also led product teams at 5 Stars Real Estate in the UAE (where we launched Dalile.com, syndicating 250+ agencies) and served as Head of Product & Delivery at Triox in the US — shipping products that reached thousands of users and drove $5M+ in client revenue.</p>

            <p>What drives me: I don't just write code or manage teams — I connect the dots between what users need, what's technically possible, and what makes business sense. Whether it's implementing CI/CD pipelines, directing UI/UX initiatives, or conducting market research, I'm focused on building things that scale and matter.</p>

            <p>I've failed, learned, and built again — from a poultry tech startup that didn't make it (but got us into the President House) to products that are thriving today. Each experience taught me something about building better.</p>

            <p>Currently exploring: AI-driven automation, WordPress ecosystem innovations, and how technology can solve local market inefficiencies in emerging economies.</p>
          </div>
        </article>

        <article className="post" id="research">
          <header>
            <h2 className="post-title split-text-heading">Research</h2>
            <div className="post-meta">Papers by Shahmir Khan</div>
          </header>

          <div className="post-content">
            <div className="companies-list">
              <div className="company-item">
                <div className="company-name">
                  <a href="https://www.academia.edu/144711991/Pakistans_Student_Housing_Market_A_Comprehensive_Market_Analysis_and_Feasibility_Study_2025_2035" target="_blank" rel="noopener noreferrer">
                    Pakistan's Student Housing Market: A Comprehensive Market Analysis and Feasibility Study (2025-2035)
                  </a>
                </div>
                <div className="company-role">Published 2025</div>
                <div className="company-desc">This research presents the first comprehensive analysis of Pakistan's student housing market, addressing a critical gap in understanding the housing needs of nearly 4 million higher education students. The study examines market dynamics, regulatory frameworks, and proposes solutions for the ~90% informal sector.</div>
              </div>

              <div className="company-item">
                <div className="company-name">
                  <a href="https://www.academia.edu/144711902/Comprehensive_Methodology_for_Pakistans_Student_Housing_Market_Analysis" target="_blank" rel="noopener noreferrer">
                    Comprehensive Methodology for Pakistan's Student Housing Market Analysis
                  </a>
                </div>
                <div className="company-role">Published 2025</div>
                <div className="company-desc">Pakistan's student housing market serves nearly 4 million higher education students, yet zero purpose-built student accommodation (PBSA) exists. This methodology paper outlines the framework used to conduct the first comprehensive survey and analysis of this informal market.</div>
              </div>

              <div className="company-item">
                <div className="company-name">
                  <a href="https://www.academia.edu/144717181/The_Evolving_WordPress_Development_Ecosystem_Industry_Whitepaper" target="_blank" rel="noopener noreferrer">
                    The Evolving WordPress Development Ecosystem - Industry Whitepaper
                  </a>
                </div>
                <div className="company-role">Published 2025</div>
                <div className="company-desc">WordPress commands 43.4% of all websites globally within a $596 billion economy. This industry whitepaper explores the evolving WordPress development ecosystem, examining current trends, best practices, and the future of WordPress development in an increasingly complex technological landscape.</div>
              </div>

              <div className="company-item">
                <div className="company-name">
                  <a href="https://www.academia.edu/143789521/The_Global_WordPress_Ecosystem_in_2025_A_Comprehensive_Stakeholder_and_Market_Analysis" target="_blank" rel="noopener noreferrer">
                    The Global WordPress Ecosystem in 2025: A Comprehensive Stakeholder and Market Analysis
                  </a>
                </div>
                <div className="company-role">Published 2025</div>
                <div className="company-desc">WordPress has solidified its position as the foundational engine of the modern web, powering an unprecedented portion of the internet. This comprehensive analysis examines the global WordPress ecosystem, stakeholder dynamics, market forces, and future trajectories of the platform.</div>
              </div>

              <div className="company-item">
                <div className="company-name">
                  <a href="https://www.academia.edu/143789460/Researching_Annual_WordPress_Users_A_Comprehensive_Stakeholder_Analysis_Framework" target="_blank" rel="noopener noreferrer">
                    Researching Annual WordPress Users: A Comprehensive Stakeholder Analysis Framework
                  </a>
                </div>
                <div className="company-role">Published 2025</div>
                <div className="company-desc">WordPress has emerged as the dominant content management system (CMS), powering 43.4% of all websites globally. This framework provides a systematic approach to understanding and analyzing WordPress user behaviors, needs, and ecosystem dynamics.</div>
              </div>
            </div>
          </div>
        </article>

        <article className="post" id="companies">
          <header>
            <h2 className="post-title split-text-heading">Companies</h2>
            <div className="post-meta">Updated October 2025</div>
          </header>

          <div className="post-content">
            <div className="companies-list">
              <div className="company-item">
                <div className="company-name">Staezy <span className="current-marker">CURRENT</span></div>
                <div className="company-desc">Launching staezy.pk, connecting students to reliable accommodations. Conducted the first survey ever of Pakistan's student housing market, and proposed legal framework for the ~90% informal sector. Tackling a real market inefficiency through research-backed solutions. <a href="https://staezy.pk" target="_blank" rel="noopener noreferrer">staezy.pk</a></div>
              </div>

              <div className="company-item">
                <div className="company-name">Reachwise AI</div>
                <div className="company-desc">Built reachwise.io to explore AI-driven automation for LinkedIn outreach. Strategically sunset the product due to lack of founder-market fit. Sometimes the best decision is knowing when to move on. <a href="https://reachwise.io" target="_blank" rel="noopener noreferrer">reachwise.io</a></div>
              </div>

              <div className="company-item">
                <div className="company-name">Pixelabs</div>
                <div className="company-desc">Established and led this technology startup delivering innovative web and software solutions. Delivered 75+ software projects and built 40+ WordPress plugins in the first year, generating over $60K in revenue. Built scalable, responsive web applications using Next.js, WordPress, and modern JavaScript frameworks. <a href="https://pixelabs.io" target="_blank" rel="noopener noreferrer">pixelabs.io</a></div>
              </div>

              <div className="company-item">
                <div className="company-name">HatchIt</div>
                <div className="company-desc">Built sustainable & automated products for poultry farming in Pakistan through the Durshal accelerator. In 6 months, we built a completely automated egg incubator with 2000 eggs capacity at just $357 (completely locally sourced), while similar solutions from China cost up to $1785. Though the startup eventually failed, we tackled a real problem for our people and earned an invite to the President House — networking with ~400 top people from Pakistan's tech industry, including lunch with the President & Cabinet.</div>
              </div>
            </div>
          </div>
        </article>
        
        <article className="post" id="experience">
          <header>
            <h2 className="post-title split-text-heading">Professional Experience</h2>
            <div className="post-meta">Work history and key achievements</div>
          </header>

          <div className="post-content">
            <div className="companies-list">
              <div className="company-item">
                <div className="company-name">5 Stars Real Estate <span className="location">(Dubai, UAE - Remote)</span></div>
                <div className="company-role">Head of Product (December 2023 - February 2025)</div>
                <div className="company-desc">Managed a distributed team to create and launch 5Stars' premier product, Dalile.com, aligning project milestones with client vision and maintaining high standards in development quality.</div>
                <div className="company-role">Project Lead Developer (May 2023 - December 2023)</div>
                <div className="company-desc">Led the product development efforts of the MVP and initial expansion, including syndication of 250+ agencies, CI/CD pipelines implementation, and successful MVP launch.</div>
              </div>

              <div className="company-item">
                <div className="company-name">Triox.io <span className="location">(Boulder, Colorado - Remote)</span></div>
                <div className="company-role">Head of Product & Delivery (January 2023 - February 2025)</div>
                <div className="company-desc">Directed the technological vision and strategy for Triox.io, aligning development efforts with business objectives. Oversaw design, development, and deployment of custom WordPress websites and applications. Recruited and led high-performing teams of developers, designers, and project managers. Implemented CI/CD pipelines and DevOps best practices to streamline development processes. Directed UI/UX initiatives using Figma. Delivered tailored solutions that drove significant client revenue.</div>
              </div>

              <div className="company-item">
                <div className="company-name">Auction Flippers, LLC <span className="location">(Texas, USA - Remote)</span></div>
                <div className="company-role">Senior Web Developer (December 2022 - March 2023)</div>
                <div className="company-desc">Delivered custom WordPress solutions including tailored plugins and features for auction management, improving operational efficiency. Enhanced user experience through improved website interactivity and design aligned with brand vision.</div>
              </div>

              <div className="company-item">
                <div className="company-name">SJP Legnocrats (SMC-Pvt.) Ltd. <span className="location">(Abbottabad, Pakistan)</span></div>
                <div className="company-role">Full Stack Developer (May 2020 - November 2022)</div>
                <div className="company-desc">Contributed to Pakistan's first Biometric E-Voting System. Led API integrations, core feature development, and mentored new team members. Built client portals and kiosk-based systems using Python, PHP, JavaScript, and WordPress.</div>
                <div className="company-role">Web Development Intern (February 2020 - May 2020)</div>
                <div className="company-desc">Started my professional journey learning full-stack development and contributing to real-world projects.</div>
              </div>
            </div>
          </div>
        </article>
        
        <article className="post" id="skills">
          <header>
            <h2 className="post-title split-text-heading">Technical Skills</h2>
            <div className="post-meta">Programming languages and technologies</div>
          </header>
          
          <div className="post-content">
            <p><strong>Advanced:</strong> JavaScript, PHP, Node.js, TypeScript</p>
            <p><strong>Intermediate:</strong> Python, React, Next.js, Data Analytics, Reinforcement Learning</p>
            <p><strong>Learning:</strong> Computer Vision, AI</p>
            
            <p>I focus on building stuff that actually works and doesn't break when someone looks at it wrong. Experience spans from backend systems (the fun part) to full-stack applications (the necessary part), with particular expertise in WordPress ecosystem and API development (the profitable part).</p>
          </div>
        </article>
        
        <article className="post">
          <header>
            <h2 className="post-title split-text-heading">Interval Story</h2>
            <div className="post-meta">The hotel project that started it all</div>
          </header>

          <div className="post-content">
            <div className="story-section">
              <p>At 16, I was broke in Swat with no plan. My friend and I convinced a hotel owner to pay us upfront for a guest management system we hadn't built yet. I spent three days straight coding a custom OCR that could read Pakistani ID cards - something no existing hotel software could do. Check-in time went from 15 minutes to under 1 minute. The best part? I made the interface so simple that literally anyone could use it, because I knew the hotel staff weren't going to read a manual.</p>
            </div>

            <p>That project taught me that users don't care about your clever code - they just want their problems solved. I've been obsessively building solutions ever since, usually at 3 AM with too much coffee.</p>
          </div>
        </article>

        <article className="post" id="resources">
          <header>
            <h2 className="post-title split-text-heading">Resources</h2>
            <div className="post-meta">Templates, checklists, and SOPs for project management</div>
          </header>

          <div className="post-content">
            <p>Over the years, I've developed frameworks and processes that help teams ship better products faster. Here are some resources you can use:</p>

            <div className="resources-grid">
              <a href="/resources/project-kickoff-checklist" className="resource-card">
                <div className="resource-icon">📋</div>
                <h3>Project Kickoff Checklist</h3>
                <p>Complete checklist for starting new projects with clients - from contracts to technical setup</p>
              </a>

              <a href="/resources/sprint-planning-checklist" className="resource-card">
                <div className="resource-icon">🗓️</div>
                <h3>Sprint Planning Checklist</h3>
                <p>Step-by-step guide for effective sprint planning, from backlog prep to task assignment</p>
              </a>

              <a href="/resources/wordpress-task-estimation" className="resource-card">
                <div className="resource-icon">⏱️</div>
                <h3>WordPress Task Estimation SOP</h3>
                <p>Detailed time estimates for WordPress tasks categorized by complexity</p>
              </a>

              <a href="/resources/plugin-development-sop" className="resource-card">
                <div className="resource-icon">🔌</div>
                <h3>Plugin Development SOP</h3>
                <p>Standard operating procedures for WordPress plugin development workflow</p>
              </a>

              <a href="/resources/site-development-sop" className="resource-card">
                <div className="resource-icon">🌐</div>
                <h3>Site Development SOP</h3>
                <p>Complete workflow for WordPress site development with Elementor and Figma</p>
              </a>
            </div>
          </div>
        </article>

        <article className="post" id="blog">
          <header>
            <h2 className="post-title split-text-heading">Blog</h2>
            <div className="post-meta">WordPress Research & Industry Insights</div>
          </header>

          <div className="post-content">
            <p>Exploring the WordPress ecosystem, market dynamics, and the future of web development through research-backed insights.</p>

            <div className="blog-preview-grid">
              {blogPosts.slice(0, 3).map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="blog-preview-card">
                  <span className="blog-preview-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt.substring(0, 120)}...</p>
                  <div className="blog-preview-meta">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link to="/blog" className="view-all-link">
                View All Blog Posts →
              </Link>
            </div>
          </div>
        </article>

        <div className="contact-info" id="contact">
          <h3>Get in touch</h3>
          <p>Email: <a href="mailto:shahmirkhanutmanzai@gmail.com">shahmirkhanutmanzai@gmail.com</a></p>
          <p>Phone: <a href="tel:+923105054025">+92 (310) 505-4025</a></p>
          <p>Location: Abbottabad, Pakistan</p>
        </div>
        
        <footer className="wp-footer">
          <p>Built with obsessive attention to detail</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage
