import React from 'react';
import '../../styles/Student/Worklogs.css';
import LogEntryForm from '../../components/LogEntryForm';
import LogsTable from '../../components/LogsTable';
import WorkSummary from '../../components/WorkSummary';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const WorklogsPage = () => {
  return (
    <div className="projects-page">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="worklogs-container">
          <h1 className="worklogs-title">Worklogs</h1>
          <div className="worklogs-sections">
            <LogEntryForm />
            <LogsTable />
            <WorkSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorklogsPage;
