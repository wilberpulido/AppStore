import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Login from '../Login/Login';
import SignUp from '../Register/Register'
import './App.css';

function App(){
return (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
