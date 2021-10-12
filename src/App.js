import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Pages/Home.js'
import Paladin from './Pages/Paladin.js';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Router>

        <div>
          <Link to='/'></Link>
          <Link to='/paladin'> Paladin </Link>
        </div>

        <Switch>

          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/paladin' exact>
            <Paladin />
          </Route>

        </Switch>

      </Router>

    );
  }
}

export default App;
