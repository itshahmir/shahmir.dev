import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TypewriterText from './components/TypewriterText'
import AnimatedSection from './components/AnimatedSection'
import AnimatedNumber from './components/AnimatedNumber'
import './App.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [formData, setFormData] = useState({ email: '' });
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const appRef = useRef(null);

  // Initial page load animation
  useEffect(() => {
    // Show content immediately first, then animate
    setShowContent(true);
    
    if (!appRef.current) return;
    
    // Set initial state for the entire page
    gsap.set(appRef.current, { opacity: 0 });
    
    // Animate page in
    gsap.to(appRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

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
    <div className="App" ref={appRef}>
      <div className="wp-admin-bar">
        <strong>WordPress Admin</strong> • <a href="#dashboard">Dashboard</a> • <a href="#posts">Posts</a> • <a href="#media">Media</a> • <a href="#pages">Pages</a> • <a href="mailto:shahmirkhanutmanzai@gmail.com">Contact Developer</a>
      </div>
      
      <div className="container">
        <header className="site-header">
          <h1 className="site-title">
            {showContent ? (
              <TypewriterText 
                text="Shahmir Khan" 
                speed={100} 
                delay={500}
                tag="span"
              />
            ) : (
              "Shahmir Khan"
            )}
          </h1>
          <p className="site-tagline">
            {showContent ? (
              <TypewriterText 
                text="an almost compulsive need to understand how things work and make them work better." 
                speed={30} 
                delay={2000}
                tag="span"
              />
            ) : (
              "an almost compulsive need to understand how things work and make them work better."
            )}
          </p>
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
        
        <AnimatedSection animationType="fadeUp" delay={0.2}>
          <article className="post">
            <header>
              <h2 className="post-title">About</h2>
              <div className="post-meta">Published on August 22, 2025 by Shahmir Khan</div>
            </header>
          
          <div className="post-content">
            <p>
              {showContent ? (
                <TypewriterText 
                  text="I'm a developer who accidentally keeps starting companies. Five ventures launched, mostly because I got annoyed with existing solutions and decided to build better ones myself." 
                  speed={20} 
                  delay={4000}
                  tag="span"
                />
              ) : (
                "I'm a developer who accidentally keeps starting companies. Five ventures launched, mostly because I got annoyed with existing solutions and decided to build better ones myself."
              )}
            </p>
            
            <div className="stats">
              <div className="stats-list">
                <div className="stat-item">
                  <AnimatedNumber 
                    value="5" 
                    className="stat-number"
                    duration={1.5}
                    delay={0.1}
                  />
                  <div className="stat-label">Companies Founded</div>
                </div>
                <div className="stat-item">
                  <AnimatedNumber 
                    value="$60K+" 
                    className="stat-number"
                    duration={2}
                    delay={0.2}
                    prefix="$"
                    suffix="K+"
                  />
                  <div className="stat-label">First Year Revenue</div>
                </div>
                <div className="stat-item">
                  <AnimatedNumber 
                    value="300+" 
                    className="stat-number"
                    duration={2.5}
                    delay={0.3}
                    suffix="+"
                  />
                  <div className="stat-label">Solutions Delivered</div>
                </div>
                <div className="stat-item">
                  <AnimatedNumber 
                    value="$5M+" 
                    className="stat-number"
                    duration={3}
                    delay={0.4}
                    prefix="$"
                    suffix="M+"
                  />
                  <div className="stat-label">Client Revenue Impact</div>
                </div>
              </div>
            </div>
            
            <p>My technical background spans JavaScript, PHP, Python, and modern frameworks. I've worked with companies across Pakistan, UAE, UK, and USA - from building Pakistan's first biometric e-voting system (because regular voting seemed hackable) to scaling real estate platforms handling 15,000+ property listings (because their previous system kept crashing).</p>
            
            <p>Currently building <a href="mailto:shahmirkhanutmanzai@gmail.com">WPCursor</a>, a WordPress development tool that somehow got 40+ agencies to sign up in the first 5 hours. Apparently other developers hate repetitive WordPress tasks as much as I do.</p>
          </div>
          </article>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={0.4}>
          <article className="post">
            <header>
              <h2 className="post-title">Companies</h2>
              <div className="post-meta">Updated August 22, 2025</div>
            </header>
          
          <div className="post-content">
            <div className="companies-list">
              <div id="wpcursor" className="company-item wp-cursor-section">
                <div className="company-name">WPCursor <span className="current-marker">CURRENT</span></div>
                <div className="company-desc">
                  {showContent ? (
                    <TypewriterText 
                      text="A comprehensive WordPress development tool that helps developers build themes and plugins faster, featuring an AI-first visual builder. Built out of pure frustration with manual WordPress workflows that were taking hours every day." 
                      speed={15} 
                      delay={6000}
                      tag="span"
                    />
                  ) : (
                    "A comprehensive WordPress development tool that helps developers build themes and plugins faster, featuring an AI-first visual builder. Built out of pure frustration with manual WordPress workflows that were taking hours every day."
                  )}
                </div>
                <div className="wpcursor-stats">
                  <div>
                    <AnimatedNumber 
                      value="40+" 
                      className="stat-number"
                      duration={1.5}
                      delay={0.1}
                      suffix="+"
                    />
                    <div className="stat-label">Agencies signed up in first 5 hours</div>
                  </div>
                  <div>
                    <AnimatedNumber 
                      value="80%" 
                      className="stat-number"
                      duration={2}
                      delay={0.2}
                      suffix="%"
                    />
                    <div className="stat-label">Time saved on repetitive tasks</div>
                  </div>
                  <div>
                    <AnimatedNumber 
                      value="24/7" 
                      className="stat-number"
                      duration={1}
                      delay={0.3}
                    />
                    <div className="stat-label">Automation running</div>
                  </div>
                </div>
                <div className="wpcursor-details">
                  <strong>What it does:</strong> Helps developers build themes and plugins faster with an AI-first visual builder, while also automating plugin updates, theme modifications, content migrations, and deployment workflows. Basically everything that used to require manual clicking, copying, and pasting across multiple WordPress installations.
                </div>
                <div className="waitlist-section">
                  <div className="waitlist-title">🚀 Join Early Access</div>
                  <div className="waitlist-desc">Be among the first to experience the future of WordPress development.</div>
                  <form onSubmit={handleSubmit} className="waitlist-form">
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address" 
                      required 
                    />
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </form>
                  {formMessage && (
                    <div className="form-message" style={{ color: formMessage.includes('✅') ? '#28a745' : '#dc3545' }}>
                      {formMessage}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="company-item">
                <div className="company-name">Pixelabs</div>
                <div className="company-desc">WordPress solutions company. Hit $60K+ revenue in first year through 40+ plugins and 75+ custom projects. Turns out businesses will pay good money to not deal with WordPress headaches themselves. <a href="https://pixelabs.io" target="_blank" rel="noopener noreferrer">pixelabs.io</a></div>
              </div>
              
              <div className="company-item">
                <div className="company-name">Reachwise</div>
                <div className="company-desc">Meet Reachwise. It understands your ICP and brand voice, and quietly handles the details. While you focus on calls and demos, Reachwise is flying the LinkedIn outreach: finding prospects, tailoring intros, and scheduling follow-ups. <a href="https://reachwise.io" target="_blank" rel="noopener noreferrer">reachwise.io</a></div>
              </div>
              
              <div className="company-item">
                <div className="company-name">Staezy</div>
                <div className="company-desc">Local hostel finder for students in Pakistan. <a href="https://staezy.pk" target="_blank" rel="noopener noreferrer">staezy.pk</a></div>
              </div>
              
              <div className="company-item">
                <div className="company-name">HatchIt</div>
                <div className="company-desc">HatchIt was to build sustainable & automated products for poultry farming in Pakistan. In the 6 months of the program, we built a completely automated egg incubator with 2000 eggs capacity at a cost of just $357 completely locally sourced, while similar solutions from china costed upto $1785. Even though our startup failed eventually, but we worked on a real problem for the betterment of our people.</div>
              </div>
            </div>
          </div>
          </article>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={0.6}>
          <article className="post">
            <header>
              <h2 className="post-title">Professional Experience</h2>
              <div className="post-meta">Work history and key achievements</div>
            </header>
          
          <div className="post-content">
            <div className="companies-list">
              <div className="company-item">
                <div className="company-name">Coresol Studio <span className="location">(Enterprise WP Agency - Remote)</span></div>
                <div className="company-role">Head of Product (May 2025 - August 2025)</div>
                <div className="company-desc">Developed and implemented processes across the distributed team, working directly with the founders. That's where I snapped at WordPress, manual tasks, taking hours every day, over and over again.</div>
              </div>
              
              <div className="company-item">
                <div className="company-name">5 Stars Real Estate <span className="location">(Dubai, UAE - Remote)</span></div>
                <div className="company-role">Head of Product (Nov 2022 - Feb 2024)</div>
                <div className="company-desc">Led distributed teams to rebuild <a href="#dalile">Dalile.com</a> from a legacy WordPress mess into a proper TypeScript application. Migrated the entire platform while keeping 250+ agencies and 15,000+ property listings running. Delivered 25+ modules using agile development, mostly by rewriting everything that was previously held together with duct tape.</div>
              </div>
              
              <div className="company-item">
                <div className="company-name">Triox LLC <span className="location">(Boulder, Colorado - Remote)</span></div>
                <div className="company-role">Chief Technology Officer (May 2023 - Jan 2024)</div>
                <div className="company-desc">Directed cross-functional teams delivering end-to-end WordPress websites and applications. Implemented CI/CD pipelines and DevOps practices. Led UI/UX efforts via Figma. Delivered solutions generating $5M+ USD in client revenue.</div>
              </div>
              
              <div className="company-item">
                <div className="company-name">QuickTech <span className="location">(United Kingdom - Remote)</span></div>
                <div className="company-role">Senior Developer (Jan 2022 - Dec 2022)</div>
                <div className="company-desc">Developed IEP, a backend system for the elevator industry. Contributed to system scalability enabling adoption by industry leaders including Schindler, Mitsubishi, and Otis. Engineered backend logic for complex vertical transportation workflows.</div>
              </div>
              
              <div className="company-item">
                <div className="company-name">SJP Legnocrats (SMC-PVT.) Ltd. <span className="location">(Abbottabad, Pakistan)</span></div>
                <div className="company-role">Full Stack Developer (Feb 2020 - Jan 2022)</div>
                <div className="company-desc">Contributed to Pakistan's first Biometric E-Voting System, facilitating 3,000+ votes via 15 deployed machines. Led API integrations, core feature development, and mentored new interns. Built client portals and kiosk-based systems using Python, PHP, JavaScript, and WordPress.</div>
              </div>
            </div>
          </div>
          </article>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={0.8}>
          <article className="post">
            <header>
              <h2 className="post-title">Technical Skills</h2>
              <div className="post-meta">Programming languages and technologies</div>
            </header>
          
          <div className="post-content">
            <p><strong>Advanced:</strong> JavaScript, PHP, Node.js, TypeScript</p>
            <p><strong>Intermediate:</strong> Python, React, Next.js, Data Analytics, Reinforcement Learning</p>
            <p><strong>Learning:</strong> Computer Vision, AI</p>
            
            <p>I focus on building stuff that actually works and doesn't break when someone looks at it wrong. Experience spans from backend systems (the fun part) to full-stack applications (the necessary part), with particular expertise in WordPress ecosystem and API development (the profitable part).</p>
          </div>
          </article>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={1.0}>
          <article className="post">
            <header>
              <h2 className="post-title">Interval Story</h2>
              <div className="post-meta">The hotel project that started it all</div>
            </header>
          
          <div className="post-content">
            <div className="story-section">
              <p>At 16, I was broke in Swat with no plan. My friend and I convinced a hotel owner to pay us upfront for a guest management system we hadn't built yet. I spent three days straight coding a custom OCR that could read Pakistani ID cards - something no existing hotel software could do. Check-in time went from 15 minutes to under 1 minute. The best part? I made the interface so simple that literally anyone could use it, because I knew the hotel staff weren't going to read a manual.</p>
            </div>
            
            <p>That project taught me that users don't care about your clever code - they just want their problems solved. I've been obsessively building solutions ever since, usually at 3 AM with too much coffee.</p>
          </div>
          </article>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={1.2}>
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>Email: <a href="mailto:shahmirkhanutmanzai@gmail.com">shahmirkhanutmanzai@gmail.com</a></p>
            <p>Phone: <a href="tel:+923105054025">+92 (310) 505-4025</a></p>
            <p>Location: Abbottabad, Pakistan</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fadeUp" delay={1.4}>
          <footer className="wp-footer">
            <p>Built with obsessive attention to detail</p>
          </footer>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default App
