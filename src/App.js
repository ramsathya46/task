import React, { useState, useContext } from "react";
import Sample from './components/sample';
//import FormData from './components/classComponents/FormData'
import './App.css';
import Api from './components/api';
import View from './components/view';
import Login  from "./components/login";
import { ThemeContext } from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  console.log("console here")
 
  return (
    <div>
    
      <Router>
        <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
            <Api />
            </Route>
            <Route path="/data/:id">
              <View />
            </Route>
          </Switch>
        </Router>
       
    </div>
  );
}



export default App;

