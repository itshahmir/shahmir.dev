import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function SprintPlanningChecklist() {
  return (
    <div className="App">
      <div className="wp-admin-bar">
        <strong>WordPress Admin</strong> • <Link to="/">Back to Home</Link>
      </div>

      <div className="container">
        <article className="post">
          <header>
            <h1 className="post-title">Sprint Planning Checklist</h1>
            <div className="post-meta">Complete guide for effective sprint planning</div>
          </header>

          <div className="post-content">
            <p>A comprehensive framework for planning successful sprints. This checklist covers everything from pre-planning preparation to mid-sprint reviews.</p>

            <h3>1. Pre-Planning Preparation</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Review Product Backlog</h4>
                <p><strong>Objective:</strong> Ensure the product backlog is up-to-date, prioritized, and clear for sprint planning.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Open the product backlog in your project management tool</li>
                  <li>Review each item for completeness - descriptions, acceptance criteria, and priority</li>
                  <li>Confirm that backlog items are aligned with the overall project roadmap</li>
                  <li>Collaborate with stakeholders if any priorities need adjustment</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Assess Previous Sprint</h4>
                <p><strong>Objective:</strong> Assess the previous sprint's incomplete tasks and decide on the next steps.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Review the sprint board for incomplete tasks</li>
                  <li>Determine if tasks should be carried over or deprioritized</li>
                  <li>Analyze the reasons for incomplete tasks (scope, blockers)</li>
                  <li>Document learnings for process improvement</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Identify Sprint Goal</h4>
                <p><strong>Objective:</strong> Define a clear, singular focus for the sprint.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Based on the product backlog, identify a major feature, improvement, or milestone</li>
                  <li>Collaborate with the Product Owner and stakeholders to ensure alignment</li>
                  <li>Formulate the sprint goal as a concise statement that is achievable within the sprint</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Capacity Planning</h4>
                <p><strong>Objective:</strong> Understand team availability for accurate task assignment.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Review the team calendar for availability (meetings, holidays, etc.)</li>
                  <li>Calculate the total available hours for each team member</li>
                  <li>Adjust expectations based on available capacity</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Ensure Task Clarity</h4>
                <p><strong>Objective:</strong> Ensure tasks are well-defined with clear requirements.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Review each task to confirm detailed descriptions and acceptance criteria</li>
                  <li>Clarify any ambiguities with stakeholders or the product owner</li>
                  <li>Ensure technical tasks have clear documentation on implementation needs</li>
                </ul>
              </div>
            </div>

            <h3>2. Task Prioritization</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Prioritize High-Value Items</h4>
                <p><strong>Objective:</strong> Focus on the most impactful tasks.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Identify tasks that provide the most business or client value</li>
                  <li>Collaborate with stakeholders to validate these priorities</li>
                  <li>Place these tasks at the top of the sprint backlog</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Balance Urgency and Importance</h4>
                <p><strong>Objective:</strong> Ensure a balanced mix of urgent and important tasks.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Categorize tasks as urgent or important (or both)</li>
                  <li>Ensure urgent items don't overshadow important tasks that drive long-term value</li>
                  <li>Add an appropriate number of urgent tasks while reserving room for important tasks</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Consider Dependencies</h4>
                <p><strong>Objective:</strong> Account for task dependencies during sprint planning.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Identify dependencies between tasks</li>
                  <li>Ensure dependent tasks are ordered correctly in the sprint backlog</li>
                  <li>Communicate dependency-related risks to the team and stakeholders</li>
                </ul>
              </div>
            </div>

            <h3>3. Task Estimation</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Estimate Time for Each Task</h4>
                <p><strong>Objective:</strong> Ensure tasks are accurately estimated based on complexity.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Assign time estimates using complexity tiers: Simple, Moderate, and Complex</li>
                  <li>Use historical data and past experience to validate time estimates</li>
                  <li>Adjust time estimates based on task-specific details or team feedback</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Assign Complexity Tiers</h4>
                <p><strong>Objective:</strong> Categorize tasks into complexity tiers for consistent estimation.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Review task requirements and technical complexity</li>
                  <li>Assign a tier (Simple, Moderate, or Complex) based on SOP guidelines</li>
                  <li>Cross-check with previous tasks of similar nature for consistency</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Incorporate Buffer Time</h4>
                <p><strong>Objective:</strong> Add buffer time to account for unexpected issues.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Add an additional 10-15% of the total sprint time for unforeseen challenges</li>
                  <li>Review past sprints to determine if adjustments are needed</li>
                  <li>Communicate buffer expectations with the team</li>
                </ul>
              </div>
            </div>

            <h3>4. Sprint Goal & Commitment</h3>
            <div className="checklist-section">
              <div className="checklist-item">
                <h4>Set a Sprint Goal</h4>
                <p><strong>Objective:</strong> Define a shared goal to drive the sprint.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Reiterate the sprint goal from the sprint planning meeting</li>
                  <li>Ensure every team member understands the goal and how their tasks contribute to it</li>
                  <li>Communicate the goal to stakeholders</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Create a Definition of Done</h4>
                <p><strong>Objective:</strong> Define clear completion criteria for tasks.</p>
                <p><strong>Process:</strong></p>
                <ul>
                  <li>Agree on what constitutes "done" (e.g., fully tested, reviewed, deployed)</li>
                  <li>Apply this definition to every task in the sprint</li>
                  <li>Ensure team-wide adherence to the agreed-upon definition</li>
                </ul>
              </div>

              <div className="checklist-item">
                <h4>Leave Room for Urgent Requests</h4>
                <p><strong>Objective:</strong> Reserve capacity to handle unexpected urgent requests.</p>
                <p><strong>Process:</strong> Leave a 5% buffer for any urgent requests that might arise during the sprint.</p>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 115, 170, 0.05)', borderLeft: '4px solid #0073aa' }}>
              <p><strong>Pro Tip:</strong> The most successful sprints start with crystal-clear goals and realistic commitments. Don't overcommit - it's better to under-promise and over-deliver than the other way around.</p>
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

export default SprintPlanningChecklist
