import React, {useState,useEffect} from 'react';
import './Register.scss';
import NavigationBar from '../NavigationBar/NavigationBar'
import Form from '../Form/Form';
import LabelTag from '../LabelTag/LabelTag';
import InputTag from '../InputTag/InputTag';
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

function SignUp(props){

  const styleSection = {
    marginTop: "50px",
    marginBottom: "50px",
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
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows:"85px 85px 85px 20px",
  }
  const boxButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumnStart: 1,
    gridColumnEnd: 3,
  }
  const styleError = {
    position: "relative",
    color: "red",
    fontSize: "18px",
    top: "-25px",
    right: '-25px',
    gridColumnStart: 1,
    gridColumnEnd: 3,
  }

  const [user,setUser] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    developer: '',
  });
  const [userTest,setUserTest] = useState({
    user_name: '',
    email: '',
  })
  const [password,setPassword] = useState("");
  const [repeatPassword,setRepeatPassword] = useState("");
  const [error,setError] = useState("");


  async function handlerSubmit(e){

    e.preventDefault();

    fetch('/register/user',{
      method:'POST',
      body: JSON.stringify({user}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res=> console.log(res))
    // .then(response=> console.log(response));
  }

  function ComparePassword(password,repeatPassword){
    if(password === repeatPassword){
      return true;
    }
    return false;
  }
  
  function requiredCharacters(password){
    let lenght = password.length;

    if(lenght < 6 && lenght !== 0){
      return false;
    }
    return true;
  }
  function numbersAndLetters(password){
    let regexp = /\W/;
    
    if (regexp.test(password)) {
      return false;
    }
    return true;
  }
  //Manejo los cambios de nombre y apellido
  function handlerInputChange(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  //Manejo cambios de username y email
  function handlerOnChangeValidateNotRepeat(e){
    const key = e.target.name;
    const value = e.target.value;

    return setUserTest({...userTest,[key]: value});

  }
  //comprobar username en la base de datos.
  useEffect(()=>{
    const input = document.getElementById('user_name');

    fetch("/register/user_name",{
      method:'POST',
      body: JSON.stringify({userTest}.userTest),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res=> res.json())
    .then(response => {
      if(response){
          input.style.borderTop = "2px solid red";
        return  setUser({...user, user_name:""});
        
      } else{
        if(input.value === ''){
            input.style.borderTop = "none";
          return  setUser({...user, user_name:""});

        }
          input.style.borderTop = "2px solid green";
        return  setUser({...user, user_name: input.value});

      }
    });
  },[userTest]);
  //Revisa en la base de datos si existe o no.
  function handlerOnBlur(){
    const input = document.getElementById('email');

    fetch("/register/email",{
      method:'POST',
      body: JSON.stringify({userTest}.userTest),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res=> res.json())
    .then(response => {
      if(response){
          input.style.borderTop = "2px solid red";
        return setUser({...user, email: "" });

      }
      if(input.value === ''){
          input.style.borderTop = "none";
        return setUser({...user, email: "" });

      }
        input.style.borderTop = "2px solid green";
      return setUser({...user, email: input.value});
    })
  }
  //Asignas contra#a al usuario si cumple las reglas
  useEffect(()=>{

    if (!requiredCharacters(password)){
      return setError('Password too short');

    }else if (!numbersAndLetters(password)) {
      return setError('The password only allows numbers and letters');

    }else if(!ComparePassword(password,repeatPassword)){
        setUser({...user,password:""});
      return setError('Passwords submitted do not match');

    }else if (!repeatPassword){
        setError("");
      return setUser({...user,password:""});
    }
    setError("");
    return setUser({...user, password: password});


  },[password,repeatPassword]);



  return (
      <React.Fragment>
      <nav>
        <NavigationBar/>
      </nav>

      <main>
        <section style={styleSection}>

          <Form id="registrationForm" onSubmit={handlerSubmit}>

            <h2 style={styleH2}>Sign Up</h2>
            
          <div style={styleInternalForm}>

            <div className="elementForm">
              <LabelTag htmlFor="firstName">First Name</LabelTag>
              <InputTag id = "firstName" name="first_name" type="text"
                onChange = {handlerInputChange}/>
            </div>
            
            <div className="elementForm">
              <LabelTag htmlFor="lastName">Last Name</LabelTag>
              <InputTag id = "lastName" name="last_name" type="text"
                onChange={handlerInputChange}/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="userName">Username</LabelTag>
              <InputTag id = "user_name" name="user_name" type="text" onChange={handlerOnChangeValidateNotRepeat} />
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="email">Email</LabelTag>
              <InputTag id = "email" name="email" type="email" 
                onChange={handlerOnChangeValidateNotRepeat} onBlur={handlerOnBlur}/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="password">New Password</LabelTag>
              <InputTag id = "password" name="password" type="password" onChange={e=>setPassword(e.target.value)}/>
            </div>

            <div className="elementForm">
              <LabelTag htmlFor="repeatPassword">Repeat Password</LabelTag>
              <InputTag id = "repeatPassword" name="repeat_password" type="password" onChange={e=> setRepeatPassword(e.target.value)}/>
            </div>
            {/* //msg error */}
              <span style = {styleError}>{error}</span>
          </div>
          <div className="elementSelecType" onChange={e=> e.target.value === 'true'?setUser({...user, developer: true}):setUser({...user, developer: false})}>

            <div className="selectTypeTitle" >
              <LabelTag>Select user type</LabelTag>
            </div>

            <div>
              <label htmlFor='client'>Client</label>
              <input id = "client" name="typeUser" type="radio" value = {false}/>
            </div>

            <div>
              <label htmlFor='developer'>Developer</label>
              <input id = "developer" name="typeUser" type="radio" value = {true}/>
            </div>

            <div style={boxButton}>
              <ButtonSubmit>
              <p>Register</p>
              </ButtonSubmit>
            </div>
          </div>

          </Form>

        </section>
      </main>
      </React.Fragment>
  )
}

export default SignUp;