import React from 'react';
import {withRouter} from 'react-router-dom';

function Button(props){

  const {path,history} = props;
  const style={
    width: "80px",
    height: "28px",
    backgroundColor: "rgb(255,130,0)",
    fontSize: "18px",
    fontWeight: "700",
  }

  return(
    <React.Fragment>
      <button
        onClick={()=> history.push(`${path}`)}
        style={style}
      >
        {props.children}
      </button>
    </React.Fragment>
  )

}


export default withRouter(Button);