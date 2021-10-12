import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
// import Jobs from './Jobs'
// import Creation from './Creation'

const Main = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/jobs' component={Jobs}/> */}
      {/* <Route path='/creation' component={Creation}/> */}
    </Switch>
  </div>
)

export default Main