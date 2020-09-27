import React from 'react';
import './InputTag.scss';

function InputTag(props){

    return (
        <input className="inputTag" id={props.id}
        name={props.name} type={props.type} required
        onChange={props.onChange} onBlur={props.onBlur}/>
    )
}

export default InputTag;