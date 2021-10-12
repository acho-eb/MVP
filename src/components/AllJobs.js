import React from 'react';
import { Link } from 'react-router-dom';
import JobAPI from '../api.js'

const AllJobs = () => (
  <div className='all-jobs'>
    {JobAPI.all().map(job => (
      <div className='all-jobs-job' key={job.link}>
        <Link to={`/jobs/${job.link}`}>{job.name}</Link>
      </div>
    ))}
  </div>
)


export default AllJobs;