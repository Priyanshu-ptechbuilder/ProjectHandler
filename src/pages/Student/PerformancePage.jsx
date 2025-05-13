import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Performance from "../../components/Performance";
import "../../styles/Student/PerformancePage.css"; // Ensure this path is correct


export default function Dashboard() {
  return (
    <div className="performance-page">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="performance-container">
          <Performance />
        </div>
      </div>
    </div>
  );
}