import React from 'react';
import classes from './CartListContents.module.css';
// import mediclogo from '../../../assets/images/mediclogo.png'
import Button from '../../../ui/ButtonList/ButtonList';
// import { FiAlignCenter } from 'react-icons/fi';
const ListContents = props =>{
    return(
        <div className={classes.CartListContents} key={props.id}>
            {/* <p>hiii</p>
            <h1>1</h1> */}
            <div className={classes.InnerDiv}>
                <div className={classes.CartImage}>
                <img  src={props.img} alt={props.name} style={{height:'40%', width:'90%', alignContent:'center'}}/>
                </div>
                {/* <span>Tokyo</span> */}
               
                
                <div className={classes.CartPrice}>
                <label className={classes.Cartlabel} style={{fontWeight:'bold'}}>Name:  {props.name}</label>
                <label className={classes.Cartlabel}>Price:  {props.price} Rs</label>
                <label className={classes.Cartlabel}>Quantity:  {props.quantity}</label>
                <Button  clicked={props.clicked} style={{height:'10px', width:'15px'}}>Add</Button>
                </div>
                
            </div>
            
        </div>
    );
}


export default ListContents;