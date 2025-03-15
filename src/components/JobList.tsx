import React from 'react';
import { Job } from '../types';
import JobCard from '../components/JobCard';
import '../styles/App.css';

type JobListProps = {
  jobs: Job[];
};

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">No jobs available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;