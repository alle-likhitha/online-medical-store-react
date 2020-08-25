import React, { Component } from 'react';
import classes from './Cart.module.css';
import CartList from '../../components/CartList/CartList';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import {FaCartPlus} from 'react-icons/fa';
import Aux from '../../hoc/Aux/Aux';
import { NavLink } from 'react-router-dom';
class Cart extends Component{
    render(){

        let cartlist = <h2>Your Cart is Empty. Please Add Medicines!</h2>
        if (this.props.added.length !== 0){
            cartlist = <Aux>
                <CartList key={'cart'} data = {this.props.added} onAddClick = {this.props.onAddList}
                onRemoveClick = {this.props.onRemove}/>
                <br></br>
                <h2>Total Price = {this.props.total}</h2>
                <div className= {classes.NavItem2}>
                <NavLink to='/med/cart/checkout'>Checkout</NavLink>

                </div>
                </Aux>
        }
        return(
            <div className={classes.Cart}>
                <h1><FaCartPlus /> Your Cart <FaCartPlus/></h1>
                {cartlist}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        added :state.medicine.addedItems,
        items : state.medicine.data,
        total : state.medicine.total
    };
};

const mapDispatchtoProps=(dispatch)=>{
    return{
        // onAddList :(id) =>dispatch(actions.adding(id))
        onAddList :(data) =>dispatch(actions.addingmed(data)),
        onRemove :(data) =>dispatch(actions.removingmed(data))
    }
    }

export default connect( mapStateToProps,mapDispatchtoProps)( Cart );