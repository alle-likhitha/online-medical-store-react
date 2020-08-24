import React from 'react';
import classes from './General.module.css';
import MedicList from '../../components/MedicList/MedicList';
const General = props =>{
    return(
        <div className={classes.General}>
            {/* <p>all medicine</p> */}
            <h2>GENERAL MEDICINE</h2>
            <MedicList type=''/>
        </div>
    );
}

export default General