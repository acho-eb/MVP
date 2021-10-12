import React from 'react';
import { Link } from 'react-router-dom';
import JobAPI from '../api.js'
import background from '../images/jobs.png'

const AllJobs = () => (
  <div className='all-jobs' style={{ backgroundImage: `url(${background})`}}>

    {JobAPI.all().map(job => (
      <div className={`all-jobs-${job.link}`} key={job.link}>

        <Link to={`/jobs/${job.link}`}> <img src={job.icon} alt='job icon'/></Link>

      </div>
    ))}

  </div>
)


export default AllJobs;