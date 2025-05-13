import React, { useState } from 'react';
import '../styles/Student/Dashboard.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Yash Goel',
      email: 'yash@email.com',
      branch: 'CSE',
      year: '3rd Year',
      enrollment: '123456',
      image: 'https://via.placeholder.com/100',
      role: 'Frontend Developer'
    }
  ]);

  const [activities, setActivities] = useState([
    'Project "AI for Healthcare" uploaded',
    'Project "Blockchain Security" approved',
    'Comment: "Needs more detailed SRS"',
    'Project "Smart City" rejected due to plagiarism'
  ]);

  const [newActivity, setNewActivity] = useState('');

  const handleAddMember = () => {
    const name = prompt('Enter name');
    const email = prompt('Enter email');
    const branch = prompt('Enter branch');
    const year = prompt('Enter year');
    const enrollment = prompt('Enter enrollment number');
    const role = prompt('Enter role/work description');
    const image = prompt('Enter image URL');
    if (name && email && branch && year && enrollment && role && image) {
      setTeamMembers(prev => [...prev, { name, email, branch, year, enrollment, role, image }]);
    }
  };

  const handleAddActivity = () => {
    if (newActivity.trim() !== '') {
      setActivities(prev => [newActivity, ...prev]);
      setNewActivity('');
    }
  };

  const projectStatsData = {
    labels: ['Submitted', 'Approved', 'Rejected', 'In Review'],
    datasets: [
      {
        data: [25, 18, 3, 4],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4
      }
    ]
  };

  return (
    <div className="dashboard">
      {/* Team Members Panel */}
      <div className="team-members-panel full-width">
        <h3>Team Members</h3>
        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="image-frame">
                <img src={member.image} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.branch}, {member.year}</p>
              <p>{member.enrollment}</p>
              <p>{member.email}</p>
              <p><strong>Work:</strong> {member.role}</p>
            </div>
          ))}
          <div className="add-card" onClick={handleAddMember}>
            <div className="image-frame">
              <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Add" />
            </div>
            <p>Add Member</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="work-log">
          <h4>Total work done</h4>
          <div className="work-time">5w: 2d</div>
        </div>

        <div className="mentor-profile">
          <h4>Mentor</h4>
          <div className="mentor-card">
            <div className="image-frame">
              <img src="https://via.placeholder.com/100" alt="Mentor" />
            </div>
            <p><strong>Dr. Neha Sharma</strong></p>
            <p>Assistant Professor</p>
            <p>neha.sharma@institute.edu</p>
            <p>IT Department</p>
          </div>
        </div>
      </div>

      {/* Middle Section: Stats + Activity + Deadlines */}
      <div className="middle-section">
        <div className="stats-activity-row">
          <div className="project-stats-panel">
            <h3>Project Stats Overview</h3>
            <div className="project-stats">
              <Pie data={projectStatsData} />
            </div>
          </div>

          <div className="recent-activity-panel">
            <h3>Recent Activity</h3>
            <div className="activity-input">
              <input
                type="text"
                placeholder="Enter new activity..."
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
              />
              <button onClick={handleAddActivity}>Submit</button>
            </div>
            <ul className="activity-feed">
              {activities.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>
        </div>

        <div className="deadlines-panel">
          <h4>Upcoming Deadlines</h4>
          <ul className="deadlines-feed">
            <li>Submit SRS by May 12</li>
            <li>PPT Presentation - May 15</li>
            <li>Final Report - May 25</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
