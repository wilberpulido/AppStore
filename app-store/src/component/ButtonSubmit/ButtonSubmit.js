import React from 'react';

function ButtonSubmit(props){
  const styleButton = {
    margin: "0px",
    width: "135px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "orangered",
    border: 'none',
    fontSize: '22px',
    }

  return(
    <button style = {styleButton} type="submit" onClick={props.onClick}>
    {props.children}
    </button>
  )
}

export default ButtonSubmit;