import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Button from '../Button/Button';

function Login(){
    return (
        <React.Fragment>
        <nav>
          <NavigationBar/>
        </nav>
        <main>
            <p> loginloginloginloginloginloginlogin </p>
            <Button path="/signup"> 
            <p>Sign Up</p>
            </Button>
        </main>
        </React.Fragment>
    )
  }
export default Login;