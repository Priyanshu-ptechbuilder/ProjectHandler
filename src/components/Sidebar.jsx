import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Student/Sidebar.css'; // Assuming you have a CSS file for styling

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><NavLink to="/" activeclassname="active">Dashboard</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
        <li><NavLink to="/worklogs" activeclassname="active">Work Logs</NavLink></li>
        <li><NavLink to="/performance" activeclassname="active">Performance</NavLink></li>
        <li><NavLink to="/settings" activeclassname="active">Settings</NavLink></li>
      </ul>
    </aside>
  );
}
export default Sidebar;
