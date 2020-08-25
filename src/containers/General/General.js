import React ,{Component} from 'react';
import classes from './General.module.css';
import MedicList from '../../components/MedicList/MedicList';
import * as actions from '../../store/actions/index';
import {connect } from 'react-redux';


class General extends Component {

    componentDidMount () {
        this.props.onFetchMedic('General medicines');
    }
    render(){
        // console.log(this.props.items)
        return(
            <div className={classes.General}>
                {/* <p>all medicine</p> */}
                <h2>GENERAL MEDICINE</h2>
                <MedicList key={'general'} data = {this.props.items} onAddClick = {this.props.onAddList}/>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        
        items : state.medicine.data
    };
};

const mapDispatchtoProps=(dispatch)=>{
    return{
        onFetchMedic :(category) =>dispatch(actions.fetchMedicine(category)),
        onAddList :(data) =>dispatch(actions.addingmed(data))
    }
    }

export default connect( mapStateToProps, mapDispatchtoProps)( General );