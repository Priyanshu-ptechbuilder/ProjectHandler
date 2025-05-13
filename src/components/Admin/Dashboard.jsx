// File: src/pages/Dashboard.jsx
import React from 'react';
import '../../styles/Admin/Dashboard.css'; // Ensure this path is correct

function Dashboard() {
  return (
    <div className="dashboard main-content">
      {/* Project Stats Cards */}
      <div className="project-stats-panel">
        <h3>Project Stats</h3>
        <div className="project-stats">
          <div className="stat-card">Submitted<br />120</div>
          <div className="stat-card">Approved<br />85</div>
          <div className="stat-card">Rejected<br />10</div>
          <div className="stat-card">In Review<br />25</div>
        </div>
      </div>

      {/* Stats and Activity */}
      <div className="stats-activity-row">
        {/* Team Activity Chart */}
        <div className="project-stats-panel">
          <h3>Team Activity Chart</h3>
          <canvas id="activityChart"></canvas>
        </div>

        {/* Recent Activity Feed */}
        <div className="recent-activity-panel">
          <h3>Recent Activity</h3>
          <div className="activity-input">
            <input type="text" placeholder="Post an update..." />
            <button>Post</button>
          </div>
          <ul className="activity-feed">
            <li>Aksha updated a project</li>
            <li>Mentor reviewed 5 submissions</li>
            <li>System generated weekly report</li>
          </ul>
        </div>
      </div>

      {/* Shortlisted Projects & Deadlines */}
      <div className="bottom-section">
        <div className="work-log">
          <h3>Shortlisted Projects</h3>
          <ul>
            <li>Smart Farming IoT</li>
            <li>AI-based Attendance</li>
            <li>Decentralized KYC</li>
          </ul>
        </div>

        <div className="mentor-profile deadlines-panel">
          <h3>Upcoming Deadlines</h3>
          <ul className="deadlines-feed">
            <li>Final submission - 20th May</li>
            <li>Mentor review due - 18th May</li>
            <li>Report generation - 25th May</li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="project-stats-panel">
        <h3>Quick Links</h3>
        <div className="project-stats">
          <div className="stat-card"><a href="/reviews">Review Projects</a></div>
          <div className="stat-card"><a href="/users">Assign Mentors</a></div>
          <div className="stat-card"><a href="/reports">Download Reports</a></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// File: src/pages/Dashboard.css
/* You already provided this CSS, so use it as-is and save as Dashboard.css in /pages directory. */
