import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Form from '../../Form/Form';
import {Link} from 'react-router-dom';
import LabelTag from '../../LabelTag/LabelTag';
import InputTag from '../../InputTag/InputTag';

function Login(){
  
  const styleMain = {
    display:"flex",
    justifyContent:"center",
  }
  const styleSection = {
    margin: "100px 0px",
  }
  const styleForm = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "100px 100px 50px",

  }
  const styleLink = {
    color:"rgb(255,89,0)",
    fontSize:"20px",
    fontWeight: "700",
    gridColumnStart: 1,
    gridColumnEnd: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const styleElement = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

    return (
        <React.Fragment>
        <nav>
          <NavigationBar/>
        </nav>
        <main style={styleMain}>

        <section style={styleSection}>
          <Form>
            <div style={styleForm}>

              <div style={styleElement}>
                <LabelTag>
                  Username or Email: 
                </LabelTag>
              </div>
              <div style={styleElement}>
                <InputTag/>
              </div>

              <div style={styleElement}>
                <LabelTag>
                  Password: 
                </LabelTag>
              </div>

              <div style={styleElement}>
                <InputTag/>
              </div>

              <div style={styleLink}>
                <Link to="/signup"> 
                  <p>Sign Up</p>
                </Link>
              </div>

            </div>
          </Form>

        </section>



        </main>
        </React.Fragment>
    )
}
export default Login;