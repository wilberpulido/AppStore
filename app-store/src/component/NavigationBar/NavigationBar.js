import React from "react";
import Button from '../Button/Button';
import './NavigationBar.scss';
import {Link} from 'react-router-dom';


function NavigationBar(){

  const styleNavigationBar = {
    backgroundColor: 'orange',
    width: '1100px',
    height: '70px',
    minWidth: '900px',
  }
  const styleElements = {
    justifyContent: 'space-between',
    display: 'flex',
    height: '70px',
    alignItems: 'center',
    listStyle:'none',
  }
  const styleImg = {
    width: '50px',
    height: '50px',
    margin: '0px',
  }

  return <div style = {styleNavigationBar}>

  <ul style={styleElements}>
    <li>
      <Link to = '/'>
      <img alt='logo' style={styleImg} src = "https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"/>
      </Link>
    </li>
    <li>
        <input id = 'search' placeholder='Search'/>
    </li>
    <li>
        <Button path="/Login">
          Login
        </Button>
    </li>
  </ul>
  </div>
}

export default NavigationBar;