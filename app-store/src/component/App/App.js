import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../Page/HomePage/HomePage';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import './App.css';

function App(){
return (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
