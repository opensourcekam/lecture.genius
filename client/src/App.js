import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Nav from './Parts/Nav';
import Home from './Home';
import Lectures from './Lectures/Lectures';
import Lecture from './Lectures/Lecture';
import NewLecture from './Lectures/NewLecture';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lectures/' component={Lectures} />
            <Route path='/lecture/:id' component={Lecture} />
            <Route path='/newLecture' component={NewLecture} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
