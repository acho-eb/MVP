import React from 'react';
import JobAPI from '../api';
import { Link } from 'react-router-dom';
import Video from './Video.js';

const Job = (props) => {
  const job = JobAPI.get(props.match.params.link)

  if (!job) {
    return <div>Sorry, but the job was not found</div>
  }
  return (
    <div className='job' style={{ backgroundImage: `url(${job.bg})`}}>

      <h1 className='job-name'>{job.name}</h1>

      <img className='job-icon' src={job.icon} alt='job icon'/>

      <h2 className='job-role'>{job.role}</h2>

      <p className='job-description'>{job.description}</p>

      <div className='job-video'>
        <Video embedId={job.embed} />
      </div>

      <Link to='/jobs' className='job-back'><i class="fas fa-chevron-left"></i> Back </Link>
    </div>
  )
}

export default Job;
