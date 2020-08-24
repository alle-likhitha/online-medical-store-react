import React from 'react';
import classes from './ColdCough.module.css';
import MedicList from '../../components/MedicList/MedicList';
const ColdCough = props =>{
    return(
        <div className={classes.ColdCough}>
            {/* <p>all medicine</p> */}
            <h2>COLD AND COUGH MEDICINE</h2>
            <MedicList type=''/>
        </div>
    );
}

export default ColdCough