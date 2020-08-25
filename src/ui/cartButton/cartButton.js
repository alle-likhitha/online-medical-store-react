import React from 'react';
import classes from './cartButton.module.css';

const button = (props) =>(
    <button className={[classes.cartButton, classes[props.btntype]].join(' ')}
    onClick={props.clicked} disabled={props.disabled}>
        {props.children}</button>
);

export default button;