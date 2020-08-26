import React, { Component } from 'react'
import classes from './Medicstore.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Photo from '../../components/Photo/Photo';

class Medicstore extends Component{
    componentWillMount(){
        // console.log(' med med')
        this.props.setAuthRedirectPath()
    }
    render(){
        
        return(
            <div className={classes.Medicstore}>
                <Photo />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    // debugger
    return {
        setAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(null, mapDispatchToProps)(Medicstore)