import React ,{Component} from 'react';
import classes from './ColdCough.module.css';
import MedicList from '../../components/MedicList/MedicList';
import * as actions from '../../store/actions/index';
import {connect } from 'react-redux';


class ColdCough extends Component {

    componentDidMount () {
        this.props.onFetchMedic('COLD AND COUGH');
    }
    render(){
        // console.log(this.props.items)
        return(
            <div className={classes.ColdCough}>
                {/* <p>all medicine</p> */}
                <h2>COLD AND COUGH</h2>
                <MedicList key={'cold'} data = {this.props.items} onAddClick = {this.props.onAddList}/>
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

export default connect( mapStateToProps, mapDispatchtoProps)( ColdCough );