import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => (
  <div className='header'>
    <Link to='/' className='link-home'>Home</Link>
    <Link to='/jobs' className='link-jobs'>Jobs</Link>
    <Link to='/creation' className='link-creation'>Creation</Link>
  </div>
)

export default Header