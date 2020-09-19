import React from 'react';
import './Register.scss';
import NavigationBar from '../NavigationBar/NavigationBar'
import Form from '../Form/Form';
import LabelTag from '../LabelTag/LabelTag';
import InputTag from '../InputTag/InputTag';

function SignUp(){
  const styleSection = {
    marginTop: "70px",
    marginBottom: "90px",
    width:'1000px',
    display: "flex",
    justifyContent: 'center',
    height: "auto",
  }
  const styleH2 = {
    textAlign: 'center',
    color: "orangered",
    fontSize: "32px",
    marginBottom: "20px",
  }
  const styleInternalForm = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows:"70px 70px 70px 70px  70px 70px 90px 90px",
  }
  const boxButton ={
    display: "flex",
    width: "340px",
    justifyContent: "center",
    alignItems: "center",
  }
  const styleButton = {
    width: "135px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "orangered",
    border: 'none',
    fontSize: '22px'
    
  }

  return (
      <React.Fragment>
      <nav>
        <NavigationBar/>
      </nav>

      <main>

          <section style={styleSection}>

          <Form id="registrationForm">
            <h2 style={styleH2}>Sign Up</h2>
            
          <div style={styleInternalForm}>

            <div className="elementForm">
              <LabelTag htmlFor="firstName">First Name</LabelTag>
              <InputTag id = "firstName" name="first_name" type="text"/>
            </div>
            
            <div className="elementForm">
              <LabelTag htmlFor="lastName">Last Name</LabelTag>
              <InputTag id = "lastName" name="last_name" type="text"/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="userName">Username</LabelTag>
              <InputTag id = "userName" name="user_name" type="text"/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="password">New Password</LabelTag>
              <InputTag id = "password" name="password" type="password"/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="repeatPassword">Repeat Password</LabelTag>
              <InputTag id = "repeatPassword" name="repeat_password" type="text"/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="email">Email</LabelTag>
              <InputTag id = "email" name="email" type="email"/>
            </div>

            <div>
              <LabelTag>Select user type</LabelTag>
              <div className="elementSelecType">

                <div>
                  <label htmlFor='client'>Client</label>
                  <input id = "client" name="typeUser" type="radio" defaultChecked/>
                </div>
                <div>
                  <label htmlFor='developer'>Developer</label>
                  <input id = "developer" name="typeUser" type="radio"/>
                </div>
              </div>
            </div>

              <div style={boxButton}>
                  <button style = {styleButton}>
                    Register
                  </button>
              </div>

          </div>
          </Form>
          </section>
      </main>
      </React.Fragment>
  )
}

export default SignUp;