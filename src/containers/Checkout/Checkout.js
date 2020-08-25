import React, { Component } from 'react';
import classes from './Checkout.module.css';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
    render(){
        return(
            <div>
                <ContactData />
            </div>
        );
    }
}

export default Checkout