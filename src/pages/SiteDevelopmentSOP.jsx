import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function SiteDevelopmentSOP() {
  return (
    <div className="App">
      <div className="wp-admin-bar">
        <strong>WordPress Admin</strong> • <Link to="/">Back to Home</Link>
      </div>

      <div className="container">
        <article className="post">
          <header>
            <h1 className="post-title">Site Development SOP</h1>
            <div className="post-meta">WordPress + Elementor + Figma + Jira workflow</div>
          </header>

          <div className="post-content">
            <p>A complete team-based workflow for WordPress site development using Elementor and Figma. This SOP covers the entire process from research and design to development, QA, and deployment.</p>

            <div style={{ marginBottom: '30px', padding: '20px', background: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid #d4af37' }}>
              <h4>Jira Workflow Overview</h4>
              <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.8' }}>
                To Do (Research) → Blocked → In Progress (Research) → Ready for Design → In Progress (Design) → Ready for Dev → In Progress (Dev) → Ready for QA/Review → In QA (Dev) → Done
              </p>
            </div>

            <h3>1. Research Team</h3>
            <div className="sop-section">
              <p><strong>Objective:</strong> Provide the foundation for IA, content requirements, and documentation.</p>
              <p><strong>Jira Workflow:</strong> To Do → Blocked → In Progress (Research) → Ready for Design</p>

              <h4>Process</h4>
              <ul>
                <li><strong>Requirement Gathering:</strong> Collect business needs, user requirements, competitor benchmarks</li>
                <li><strong>Information Architecture (IA):</strong> Define sitemap, hierarchy, content flow</li>
                <li><strong>Documentation:</strong> Prepare functional documentation (acceptance criteria, dependencies)</li>
                <li><strong>Content Prep:</strong> Draft copy, media references, and guidelines</li>
              </ul>

              <h4>Deliverables to Design</h4>
              <ul>
                <li>IA diagrams (sitemap, content hierarchy)</li>
                <li>Documentation (functional + user flow)</li>
                <li>Content drafts</li>
              </ul>
            </div>

            <h3>2. Design Team (Figma)</h3>
            <div className="sop-section">
              <p><strong>Objective:</strong> Translate IA & documentation into high-fidelity, developer-ready designs.</p>
              <p><strong>Jira Workflow:</strong> Ready for Design → In Progress (Design) → Ready for Dev</p>

              <h4>Process</h4>
              <ul>
                <li><strong>Review IA + Docs:</strong> Confirm IA and requirements are complete</li>
                <li><strong>Wireframes (if needed):</strong> Create low-fidelity wireframes for layout validation</li>
                <li><strong>Figma Design:</strong> Build responsive designs aligned with brand style guide</li>
                <li><strong>Design Documentation:</strong> Annotate spacing, typography, interactions, hover states</li>
                <li><strong>Asset Prep:</strong> Export icons, images, and other design assets for dev</li>
                <li><strong>Handoff to Dev:</strong> Attach Figma file + design notes to Jira ticket</li>
              </ul>

              <h4>Deliverables to Development</h4>
              <ul>
                <li>Figma designs (desktop, tablet, mobile)</li>
                <li>Exported assets (SVG/PNG)</li>
                <li>Documentation for spacing, colors, fonts</li>
              </ul>
            </div>

            <h3>3. Development Team (WordPress + Elementor + Custom Code)</h3>
            <div className="sop-section">
              <p><strong>Objective:</strong> Implement Figma designs + IA in WordPress using Elementor and code.</p>
              <p><strong>Jira Workflow:</strong> Ready for Dev → In Progress (Dev) → Ready for QA/Review</p>

              <h4>Process</h4>
              <ul>
                <li><strong>Setup Environment:</strong> Ensure WP instance + Elementor + plugins are ready</li>
                <li><strong>Review Figma + IA:</strong> Align structure with IA + visual fidelity with Figma</li>
                <li><strong>Elementor Implementation:</strong> Build layouts with widgets, templates, and sections</li>
                <li><strong>Custom Development:</strong> Write PHP/JS for advanced features</li>
                <li><strong>Code Standards:</strong> Follow WordPress coding standards + PSR-12</li>
                <li><strong>Version Control:</strong> Commit frequently; reference Jira ticket ID in commit messages</li>
                <li><strong>Move to QA:</strong> Submit PR + attach link/screenshots to Jira task</li>
              </ul>

              <h4>Deliverables to QA</h4>
              <ul>
                <li>Implemented feature/page</li>
                <li>Linked PR/branch in Jira</li>
                <li>Notes on any limitations/differences from design</li>
              </ul>
            </div>

            <h3>4. QA Team</h3>
            <div className="sop-section">
              <p><strong>Objective:</strong> Validate implementation against IA, Figma, and requirements.</p>
              <p><strong>Jira Workflow:</strong> Ready for QA/Review → In QA (Dev) → Done / Back to Dev</p>

              <h4>Process</h4>
              <ul>
                <li><strong>Design Validation:</strong> Compare implementation vs. Figma designs</li>
                <li><strong>IA Check:</strong> Ensure structure matches documentation</li>
                <li><strong>Functionality Testing:</strong> Verify acceptance criteria</li>
                <li><strong>Responsiveness Testing:</strong> Mobile, tablet, desktop</li>
                <li><strong>Cross-browser Testing:</strong> Chrome, Firefox, Safari, Edge</li>
                <li><strong>Bug Logging:</strong> Create sub-tasks in Jira with screenshots</li>
                <li><strong>Re-Test:</strong> Verify fixes before approving task</li>
              </ul>

              <h4>Deliverables to Task Closure</h4>
              <ul>
                <li>QA checklist/report in Jira</li>
                <li>Bugs resolved and verified</li>
                <li>Confirmation that acceptance criteria are met</li>
              </ul>
            </div>

            <h3>5. Task Closure (PM / Dev Lead)</h3>
            <div className="sop-section">
              <p><strong>Objective:</strong> Ensure completed task meets all requirements and is properly documented.</p>
              <p><strong>Jira Workflow:</strong> In QA (Dev) → Done</p>

              <h4>Process</h4>
              <ul>
                <li><strong>Final Verification:</strong> Confirm QA approval + acceptance criteria</li>
                <li><strong>Deployment:</strong> Move changes to staging/production</li>
                <li><strong>Documentation Update:</strong> Update Confluence / internal docs with details</li>
                <li><strong>Jira Update:</strong> Move task to Done, close all subtasks</li>
                <li><strong>Retrospective (if needed):</strong> Note lessons learned for process improvement</li>
              </ul>

              <h4>Deliverables</h4>
              <ul>
                <li>Live/staging deployment link</li>
                <li>Updated documentation</li>
                <li>Jira task closed</li>
              </ul>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 115, 170, 0.05)', borderLeft: '4px solid #0073aa' }}>
              <p><strong>Team Workflow Tips:</strong></p>
              <ul style={{ marginBottom: 0 }}>
                <li>Each team passes the baton cleanly - don't start the next phase until deliverables are complete</li>
                <li>Jira statuses should always reflect reality - if you're blocked, mark it as Blocked immediately</li>
                <li>Communication between teams is crucial - don't assume the next team knows what you meant</li>
                <li>Document everything - your future self (and team) will thank you</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="contact-info">
          <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#0073aa', textDecoration: 'underline' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default SiteDevelopmentSOP
