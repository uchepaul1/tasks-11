import React, { useState } from 'react';
import JobList from './components/JobList';
import { jobData } from './data/jobData';
import { Job } from './types';
import '../src/styles/App.css';

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(jobData);
  
  // Demo function to toggle empty state
  const toggleEmptyState = () => {
    if (jobs.length > 0) {
      setJobs([]);
    } else {
      setJobs(jobData);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="page-title">Job Listings</h1>
        <button 
          onClick={toggleEmptyState} 
          className="toggle-button"
        >
          {jobs.length > 0 ? "Show Empty State" : "Show Jobs"}
        </button>
      </div>
      
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;