import React from 'react';
import classes from './ListContents.module.css';
// import mediclogo from '../../../assets/images/mediclogo.png'
import Button from '../../../ui/ButtonList/ButtonList';
const ListContents = props =>{
    return(
        <div className={classes.ListContents} key={props.id}>
            {/* <p>hiii</p>
            <h1>1</h1> */}
            <div >
                {/* <span>Tokyo</span> */}
                <img className={classes.Image} src={props.img} alt={props.name} style={{height:'60%', width:'100%'}}/>
                
                <div className={classes.Price}>
                <label className={classes.Mlabel}>Name:  {props.name}</label>
                <label >Price:  {props.price} Rs</label>
                <label>Quantity:  {props.quantity}</label>
                <Button  clicked={props.clicked}>Add</Button>
                </div>
                
            </div>
            
        </div>
    );
}


export default ListContents;