import React from 'react'
import JobAPI from '../api'
import { Link } from 'react-router-dom'

const Job = (props) => {
  const job = JobAPI.get(props.match.params.link)

  if (!job) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div className='job' style={{ backgroundImage: `url(${job.bg})`}}>
      <h1 className='job-name'>{job.name}</h1>

      <img className='job-icon' src={job.icon} alt='job icon'/>

      <h2 className='job-role'>{job.role}</h2>


      <Link to='/jobs'>Back</Link>
    </div>
  )
}

export default Job;
