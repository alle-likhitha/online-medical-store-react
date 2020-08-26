import React, { Component } from 'react';
// import classes from './Checkout.module.css';
import {Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import Order from './ContactData/order';
import {connect} from 'react-redux';
class Checkout extends Component{
    render(){
        let summary = <Redirect to="/med" />
        if ( this.props.total ) {
            const purchasedRedirect = this.props.purchase ? <Redirect to="/med"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <Order added= {this.props.added} total={this.props.total} />
                    <ContactData />
                </div>
            )
        
    }
    return summary;
}
}
const mapStateToProps = state => {
    return {
        added :state.medicine.addedItems,
        items : state.medicine.data,
        total : state.medicine.total,
        purchase: state.medicine.purchased
    };
};
export default connect( mapStateToProps,null)( Checkout );