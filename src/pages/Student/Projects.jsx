import React from 'react';
import ProjectUploadForm from '../../components/ProjectUploadForm';
import ProjectTable from '../../components/ProjectTable';
import FeedbackSection from '../../components/FeedbackSection';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../styles/Student/Project.css'; // Make sure the path is correct


const Projects = () => {
  return (
    
    <div className="projects-page">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="projects-container">
          <h1>Manage Projects</h1>
          <ProjectUploadForm />
          <ProjectTable />
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default Projects;
