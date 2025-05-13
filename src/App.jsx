import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Student Pages

import HomePage from './pages/Student/HomePage';
import Projects from './pages/Student/Projects';
import WorkLogs from './pages/Student/WorkLogs';
import Performance from './pages/Student/PerformancePage';
import Settings from './pages/Student/SettingsPage';
import './App.css'; // Make sure the path is correct


// Admin Pages
import AdminHomePage from './pages/Admin/HomePage';


function App() {
  return (
    <Router>
      <Routes>

      {/* Student Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/worklogs" element={<WorkLogs />} />
        <Route path="/performance" element={<Performance />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      
      {/* Admin Routes */}
        <Route path="/settings" element={<AdminHomePage />} />

      
      
      
      
        </Routes>
    </Router>
  );
}

export default App;
