import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Nav from './Parts/Nav';
import Home from './Home';
import Lecture from './Lecture/Lecture';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lecture/:id' component={Lecture} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
