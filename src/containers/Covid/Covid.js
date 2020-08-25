import React ,{Component} from 'react';
import classes from './Covid.module.css';
import MedicList from '../../components/MedicList/MedicList';
import * as actions from '../../store/actions/index';
import {connect } from 'react-redux';


class Covid extends Component {

    componentDidMount () {
        this.props.onFetchMedic('CORONAVIRUS');
    }
    render(){
        // console.log(this.props.items)
        return(
            <div className={classes.Covid}>
                {/* <p>all medicine</p> */}
                <h2>COVID-19 MEDICINE</h2>
                <MedicList key={'corona'} data = {this.props.items} onAddClick = {this.props.onAddList}/>
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

export default connect( mapStateToProps, mapDispatchtoProps)( Covid );