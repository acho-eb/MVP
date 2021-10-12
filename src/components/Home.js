import React from 'react';
import background from '../images/home.png'
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='home' style={{ backgroundImage: `url(${background})` }}>

    <div className='home-welcome'>
      Welcome to Eorzea!
    </div>

    <div className='intro'>
      The next expansion to the critically acclaimed MMORPG with a free trial up to level 60 including the Heavensward expansion is right around the corner.
    </div>

    <div className='journey'>
      Time to start your journey.
    </div>

    <div className='home-choose'>
      Choose one of the following:

      <div className='home-job'>
        Start by finding the right job

        <Link to='/jobs' className='home-jobs'>Jobs</Link>

      </div>

      <div className='home-creation'>
        Create a name

        <Link to='/creation' className='home-creations'>Creation</Link>

      </div>
    </div>

  </div>
);


export default Home;