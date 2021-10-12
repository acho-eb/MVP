import React from 'react';
import background from '../images/home.png'
import { Link } from 'react-router-dom';
import Prelude from './Prelude';

const Home = () => (
  <div className='home' style={{ backgroundImage: `url(${background})` }}>

    <div className='home-welcome'>
      WELCOME TO EORZEA
    </div>

    <div className='home-journey'>
      TIME TO START YOUR JOURNEY
    </div>

    <div className='home-choose'>
      CHOOSE ONE OF THE FOLLOWING

      <div className='home-job'>


        <Link to='/jobs' className='home-jobs'>Jobs</Link>

      </div>

      <div className='home-creation'>


        <Link to='/creation' className='home-creations'>Creation</Link>

      </div>

      <div className='home-audio'>
        <Prelude />
      </div>

    </div>

  </div>
);


export default Home;