import React, { useState } from 'react';
import { Job } from '../types';
import '../styles/App.css';

type JobCardProps = {
  job: Job;
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h2 className="job-title">{job.title}</h2>
          <div className="job-info">
            <p className="job-detail">
              <span className="job-label">Company:</span> {job.company}
            </p>
            <p className="job-detail">
              <span className="job-label">Location:</span> {job.location}
            </p>
            <p className="job-detail">
              <span className="job-label">Salary:</span> {job.salary}
            </p>
          </div>
        </div>
        <button 
          onClick={toggleDetails}
          className="details-button"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      
      {showDetails && (
        <div className="job-description">
          <h3 className="description-title">Job Description:</h3>
          <p className="description-text">{job.description || "No description available."}</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;