import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function ProjectKickoffChecklist() {
  return (
    <div className="App">
      <div className="wp-admin-bar">
        <strong>WordPress Admin</strong> • <Link to="/">Back to Home</Link>
      </div>

      <div className="container">
        <article className="post">
          <header>
            <h1 className="post-title">Project Kickoff Checklist</h1>
            <div className="post-meta">Comprehensive checklist for client project kickoff</div>
          </header>

          <div className="post-content">
            <p>This checklist ensures that all critical aspects of a new project are properly addressed before development begins. Use this as a framework to avoid common pitfalls and set clear expectations with clients.</p>

            <h3>Pre-Kickoff Preparation</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Client Agreement Signed</h4>
                <p><strong>SOP:</strong> Ensure the contract and any necessary legal agreements are signed by both parties.</p>
                <p><strong>Notes:</strong> Contract created and signed by client</p>
              </div>

              <div className="checklist-item">
                <h4>Scope Defined and Approved</h4>
                <p><strong>SOP:</strong> Ensure that the project scope (outlined in the Project Brief) has been reviewed and approved by the client. Document any out-of-scope items explicitly.</p>
                <p><strong>Deliverable:</strong> Project Brief</p>
              </div>

              <div className="checklist-item">
                <h4>Project Brief Completed</h4>
                <p><strong>SOP:</strong> Confirm that the Project Brief, detailing objectives, deliverables, and timelines, has been finalized and shared with the client.</p>
                <p><strong>Deliverable:</strong> Project Brief</p>
              </div>

              <div className="checklist-item">
                <h4>Milestones Established</h4>
                <p><strong>SOP:</strong> Establish and confirm the key milestones (e.g., development, testing, and launch dates). Confirm the timeline with all stakeholders.</p>
                <p><strong>Deliverable:</strong> Project Brief with milestones</p>
              </div>
            </div>

            <h3>Development and Technical Setup</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Technical Requirements Clarified</h4>
                <p><strong>SOP:</strong> Confirm understanding of technical requirements (e.g., booking functionality, deposit handling, notification integration).</p>
                <p><strong>Deliverable:</strong> Technical requirements document</p>
              </div>

              <div className="checklist-item">
                <h4>Development Environment Setup</h4>
                <p><strong>SOP:</strong> Set up the local and staging environments for development. Ensure any required plugins, APIs, or third-party services are ready for integration.</p>
                <p><strong>Example:</strong> WordPress on local environment with required plugins</p>
              </div>

              <div className="checklist-item">
                <h4>Version Control Established</h4>
                <p><strong>SOP:</strong> Set up Git repository or preferred version control system. Ensure project branches are created for different stages (e.g., dev, QA, production).</p>
                <p><strong>Deliverable:</strong> GitHub/GitLab repository with proper branch structure</p>
              </div>

              <div className="checklist-item">
                <h4>Communication Channels Established</h4>
                <p><strong>SOP:</strong> Confirm that all communication channels (Slack, WhatsApp, Email) between the client, development team, and other stakeholders are set up. Clarify the escalation process for urgent matters.</p>
              </div>

              <div className="checklist-item">
                <h4>Task Management Tools Ready</h4>
                <p><strong>SOP:</strong> Set up project management tool (Jira, GitHub Projects, etc.) to track development tasks, bug fixes, and testing tasks.</p>
              </div>
            </div>

            <h3>Team Roles Defined</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Internal Team Roles</h4>
                <p><strong>SOP:</strong> Assign responsibilities for Development, QA, and testing. Clarify who from the client-side will handle approvals and feedback.</p>
              </div>

              <div className="checklist-item">
                <h4>Client Contact Confirmed</h4>
                <p><strong>SOP:</strong> Identify the key client point of contact for ongoing communication, approvals, and feedback.</p>
              </div>
            </div>

            <h3>Testing and QA Planning</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>QA Plan Finalized</h4>
                <p><strong>SOP:</strong> Develop a clear QA plan to ensure functionality works as expected. Establish the process for bug reporting and fixing.</p>
              </div>

              <div className="checklist-item">
                <h4>Test Cases Created</h4>
                <p><strong>SOP:</strong> Create test cases for each major functionality, including all critical user flows and edge cases.</p>
              </div>
            </div>

            <h3>Launch and Support Planning</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Go-Live Strategy Defined</h4>
                <p><strong>SOP:</strong> Confirm the strategy for launching. Plan for a soft launch or staging deployment before the final go-live to ensure all functionalities are working smoothly.</p>
              </div>

              <div className="checklist-item">
                <h4>Post-Launch Support Defined</h4>
                <p><strong>SOP:</strong> Define the support period post-launch for any potential issues or bug fixes. Clarify how to handle urgent support requests.</p>
              </div>
            </div>

            <h3>Approval and Sign-Off</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Client Sign-Off</h4>
                <p><strong>SOP:</strong> Obtain client sign-off to begin development.</p>
              </div>

              <div className="checklist-item">
                <h4>Internal Approval</h4>
                <p><strong>SOP:</strong> Confirm that the internal team is ready to proceed with development as per the finalized requirements.</p>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 115, 170, 0.05)', borderLeft: '4px solid #0073aa' }}>
              <p><strong>Key Takeaway:</strong> This checklist ensures nothing falls through the cracks during project kickoff. Adapt it to your specific project needs, but don't skip steps - they're all there for a reason learned through experience.</p>
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

export default ProjectKickoffChecklist
