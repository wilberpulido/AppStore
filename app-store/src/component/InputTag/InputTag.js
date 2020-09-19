import React from 'react';
import './InputTag.scss';

function InputTag(props){

    return (
        <input className="inputTag" id={props.id} 
        name={props.name} type={props.type}/>
    )
}

export default InputTag;