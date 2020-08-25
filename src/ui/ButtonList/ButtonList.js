import React from 'react';
import classes from './ButtonList.module.css';

const button = (props) =>(
    <div style={{alignContent:'center'}}>
        <button className={[classes.ButtonList, classes[props.btntype]].join(' ')}
    onClick={props.clicked} disabled={props.disabled}>
        {props.children}</button>
    </div>
    
);

export default button;