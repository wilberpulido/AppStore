import React from 'react';

function LabelTag(props){
  const style = {
    fontSize: '20px',
    fontWeight: '600',
    color: 'black',
    marginRight: '20px',
    transition: 'all 0.5s ease-in-out',
  }

  return(
    <label style={style} htmlFor={props.for}>
      {props.children}
    </label>
  )
}

export default LabelTag;