import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllPlants from './components/AllPlants.js'
import SinglePlant from './components/SinglePlant.js'
import PlantComponent from './components/PlantComponent.js'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/allplants' component={AllPlants} />
    <Route path='/singleplant' component={SinglePlant} />
    <Route path='/plants' component={PlantComponent} />
  </Router>
),document.getElementById('root'));
