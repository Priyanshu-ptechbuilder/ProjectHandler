import React from 'react';
import NavbarAdmin from '../../components/Admin/Navbar';
import SidebarAdmin from '../../components/Admin/Sidebar';
import Dashboard from '../../components/Admin/Dashboard';
import '../../styles/Admin/HomePage.css'; // Ensure this path is correct

function HomePage() {
  return (
    <div className="homepage">
      <SidebarAdmin />
      <div className="main-content">
        <div className="navbar">
          <NavbarAdmin />
        </div>
        <div className="dashboard-container">
          <h1>Admin Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
