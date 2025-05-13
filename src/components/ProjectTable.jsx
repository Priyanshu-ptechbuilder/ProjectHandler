import React, { useState } from 'react';
import '../styles/Student/ProjectTable.css'; // Make sure the path is correct

const sampleProjects = [
  {
    title: "AI Chatbot",
    status: "Approved",
    branch: "CSE",
    semester: "6",
  },
  {
    title: "ML Prediction App",
    status: "Pending",
    branch: "IT",
    semester: "7",
  },
];

const ProjectTable = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = sampleProjects.filter(project =>
    (!statusFilter || project.status === statusFilter) &&
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="project-table-section">
      <h2>Projects List</h2>
      <div className="filters">
        <select onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="text"
          placeholder="Search by title..."
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <table className="project-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((project, idx) => (
            <tr key={idx}>
              <td>{project.title}</td>
              <td>{project.status}</td>
              <td>{project.branch}</td>
              <td>{project.semester}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
