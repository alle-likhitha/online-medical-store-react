import React from 'react';
import ListContents from './CartListContents/CartListContents';
import classes from './CartList.module.css';
// import Aux from '../../hoc/Aux/Aux';

const MedicList = props =>{
console.log(props.data)
console.log(typeof(props.data))
console.log(Array.isArray(props.data))
    const listlist = props.data.map(item =>(
        <ListContents key={item.id} id = {item._id} name = {item.Name} price = {item.Price} img={item.Image}
         clicked = {()=>props.onAddClick(item)}
         quantity={item.quantity}/>
    ))
    // console.log()
    // const alle = props.data.map(a => (console.log('allelalleksjhfuyg')))
    return(
        <div className={classes.MedicListDiv}>
             <h3 style={{padding:'0 0 0 40px', margin:0, color:'white'}}>{props.type}</h3>
            <div className={classes.MedicList}>
                {listlist}
        
        </div>
        </div>
    );
}


export default MedicList;