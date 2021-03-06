import React ,{Component} from 'react';
import classes from './SkinCare.module.css';
import MedicList from '../../components/MedicList/MedicList';
import * as actions from '../../store/actions/index';
import {connect } from 'react-redux';


class SkinCare extends Component {

    componentDidMount () {
        this.props.onFetchMedic('SKIN CARE');
    }
    render(){
        // console.log(this.props.items)
        return(
            <div className={classes.SkinCare}>
                {/* <p>all medicine</p> */}
                <h2>SKIN CARE</h2>
                <MedicList key={'skincare'} cat='SKIN CARE' data = {this.props.items} onAddClick = {this.props.onAddList}/>
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

export default connect( mapStateToProps, mapDispatchtoProps)( SkinCare );