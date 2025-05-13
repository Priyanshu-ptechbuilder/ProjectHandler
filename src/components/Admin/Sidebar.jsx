import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Admin/Sidebar.css';

function SidebarAdmin() {
  return (
    <aside className="sidebar-admin">
      <ul>
        <li><NavLink to="/" activeclassname="active">Dashboard</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
        <li><NavLink to="/worklogs" activeclassname="active">Work Logs</NavLink></li>
        <li><NavLink to="/performance" activeclassname="active">Performance</NavLink></li>
        <li><NavLink to="/users" activeclassname="active">Users</NavLink></li>
        <li><NavLink to="/reviews" activeclassname="active">Reviews</NavLink></li>
        <li><NavLink to="/settings" activeclassname="active">Settings</NavLink></li>
        <li><NavLink to="/reports" activeclassname="active">Reports</NavLink></li>
        <li><NavLink to="/support" activeclassname="active">Support</NavLink></li>
      </ul>
    </aside>
  );
}

export default SidebarAdmin;
