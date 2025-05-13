import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Settings from "../../components/Settings";
import "../../styles/Student/SettingsPage.css"; // Ensure you import the settings-specific CSS

export default function SettingsPage() {
  return (
    <div className="settings-page">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="settings-container">
          <Settings />
        </div>
      </div>
    </div>
  );
}
