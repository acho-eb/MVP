import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllJobs from './AllJobs';
import Job from './Job';
import '../App.css';

const Jobs = () => (
  <Switch>
    <Route exact path='/jobs' component={AllJobs} />
    <Route path='/jobs/:link' component={Job} />
  </Switch>
)

export default Jobs;
