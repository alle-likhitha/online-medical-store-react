import React from 'react';
import classes from './ButtonList.module.css';

const button = (props) =>(
    <button className={[classes.ButtonList, classes[props.btntype]].join(' ')}
    onClick={props.clicked} disabled={props.disabled}>
        {props.children}</button>
);

export default button;