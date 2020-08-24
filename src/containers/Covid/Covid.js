import React from 'react';
import classes from './Covid.module.css';
import MedicList from '../../components/MedicList/MedicList';
const Covid = props =>{
    return(
        <div className={classes.Covid}>
            {/* <p>all medicine</p> */}
            <h2>COVID-19 MEDICINE</h2>
            <MedicList type=''/>
        </div>
    );
}

export default Covid