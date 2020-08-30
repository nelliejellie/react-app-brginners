import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Clicker from './components/Clicker.js';
import BasicClock from './components/BasicClock.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>My react apps as a beginner</p>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/clicker' component={Clicker} />
          <Route path='/basic-clock' component={BasicClock} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return(
    <div className="p-body">
        <p>
          Click on the links to see the react apps i've created
        </p>
      </div>
  );
}

export default App;
