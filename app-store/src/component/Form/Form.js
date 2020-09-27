import React from 'react';

function Form(props){

  const styleForm = {
    backgroundColor: "orange",
    borderRadius: "10px",
    width: "500px",
    height: "auto",
    padding: "20px 30px",
  }

  return(
    <form style={styleForm} id={props.id} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}



export default Form;