import React from 'react';

function Form(props){

  const styleForm = {
    backgroundColor: "orange",
    borderRadius: "10px",
    width: "400px",
    height: "auto",
    padding: "20px 30px",
  }

  return(
    <form style={styleForm} id={props.id}>
      {props.children}
    </form>
  )
}



export default Form;