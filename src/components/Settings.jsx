  import React, { useState } from "react";
  import "../styles/Student/Settings.css";

  export default function Settings() {
    const [profile, setProfile] = useState({
      name: "",
      email: "",
      password: "",
      role: "Student", // Default role
    });

    const [instituteConfig, setInstituteConfig] = useState({
      semesterStart: "",
      semesterEnd: "",
      branches: ["Computer Science", "Electrical Engineering"],
      assignedMentors: {},
    });

    const [notifications, setNotifications] = useState({
      emailNotifications: true,
      smsNotifications: false,
    });

    const [theme, setTheme] = useState("light");

    const handleProfileChange = (e) => {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleInstituteConfigChange = (e) => {
      setInstituteConfig({ ...instituteConfig, [e.target.name]: e.target.value });
    };

    const handleNotificationChange = (e) => {
      setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    };

    const handleThemeChange = (e) => {
      setTheme(e.target.value);
    };

    return (
      <div className="settings-page">
        <div className="settings-container">
          <h1>User Settings</h1>

          {/* Profile Settings */}
          <div className="panel">
            <h2>Profile Settings</h2>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <select
                  name="role"
                  value={profile.role}
                  onChange={handleProfileChange}
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Mentor">Mentor</option>
                </select>
              </div>
            </form>
          </div>

          {/* Institute Configuration */}
          <div className="panel">
            <h2>Institute Configuration</h2>
            <form>
              <div className="form-group">
                <label>Semester Start Date:</label>
                <input
                  type="date"
                  name="semesterStart"
                  value={instituteConfig.semesterStart}
                  onChange={handleInstituteConfigChange}
                />
              </div>
              <div className="form-group">
                <label>Semester End Date:</label>
                <input
                  type="date"
                  name="semesterEnd"
                  value={instituteConfig.semesterEnd}
                  onChange={handleInstituteConfigChange}
                />
              </div>
              <div className="form-group">
                <label>Branch/Department:</label>
                <select
                  name="branches"
                  multiple
                  value={instituteConfig.branches}
                  onChange={handleInstituteConfigChange}
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
              </div>
              <div className="form-group">
                <label>Assign Mentors to Students/Projects:</label>
                <input
                  type="text"
                  name="assignedMentors"
                  placeholder="Enter mentor names"
                  value={instituteConfig.assignedMentors}
                  onChange={handleInstituteConfigChange}
                />
              </div>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="panel">
            <h2>Notification Settings</h2>
            <form>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={notifications.emailNotifications}
                    onChange={handleNotificationChange}
                  />
                  Email Notifications
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={notifications.smsNotifications}
                    onChange={handleNotificationChange}
                  />
                  SMS Notifications
                </label>
              </div>
            </form>
          </div>

          {/* Theme Settings */}
          <div className="panel">
            <h2>Theme Preferences</h2>
            <form>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === "light"}
                    onChange={handleThemeChange}
                  />
                  Light Mode
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={theme === "dark"}
                    onChange={handleThemeChange}
                  />
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
