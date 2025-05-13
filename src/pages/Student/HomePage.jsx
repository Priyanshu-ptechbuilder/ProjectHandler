import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../components/Dashboard';
import '../../styles/Student/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <Sidebar />
      <div className="main-content">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="dashboard-container">
          <h1>Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
