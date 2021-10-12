import React from 'react'
import JobAPI from '../api'
import { Link } from 'react-router-dom'

const Job = (props) => {
  const job = JobAPI.get(props.match.params.link)

  if (!job) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      {console.log(props)}
      {/* <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link> */}
    </div>
  )
}

export default Job;
