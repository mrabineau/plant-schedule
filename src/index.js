import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllPlants from './components/AllPlants.js'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/allplants' component={AllPlants} />
  </Router>
),document.getElementById('root'));
