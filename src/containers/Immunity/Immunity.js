import React ,{Component} from 'react';
import classes from './Immunity.module.css';
import MedicList from '../../components/MedicList/MedicList';
import * as actions from '../../store/actions/index';
import {connect } from 'react-redux';


class Immunity extends Component {

    componentDidMount () {
        this.props.onFetchMedic('ESSENTIAL SUPPLEMENTS');
    }
    render(){
        // console.log(this.props.items)
        return(
            <div className={classes.Immunity}>
                {/* <p>all medicine</p> */}
                <h2>IMMUNITY BOOSTERS</h2>
                <MedicList key={'immunity'} data = {this.props.items} onAddClick = {this.props.onAddList}/>
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

export default connect( mapStateToProps, mapDispatchtoProps)( Immunity );