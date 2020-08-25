import React from 'react';
import classes from './order.module.css';
const order =(props)=>{
    console.log(props.added,props.total)
    const ing =[];
    for(const id in props.added){
        ing.push({ name:props.added[id].Name, amount:props.added[id].Price, quantity:props.added[id].quantity})
    }


    const ingOutput = ing.map(i =>{
    return <span 
    key={i.name}
    style={{
        textTransform:'capitalize',
        display:'inline-block',
        color:'white',
        margin:'0 9px',
        padding:'5px',
        border:'1px solid white'

    }}> {i.name}   ({'Rs:'+i.amount},{'+'+i.quantity})</span>
    })
    return(
        <div className={classes.Order }>
        <p></p>
        <p>Medicine : {ingOutput} </p>
        <p>Price: <strong>Rs {props.total}</strong></p>
        </div>
    );
 
};

export default order;