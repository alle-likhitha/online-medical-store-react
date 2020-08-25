import React, { Component } from 'react';
import classes from './Checkout.module.css';
import ContactData from './ContactData/ContactData';
import Order from './ContactData/order';
import {connect} from 'react-redux';
class Checkout extends Component{
    render(){
        return(
            <div>
                <Order added= {this.props.added} total={this.props.total} />
                <ContactData />
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
export default connect( mapStateToProps,null)( Checkout );