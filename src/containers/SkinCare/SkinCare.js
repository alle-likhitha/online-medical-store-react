import React from 'react';
import classes from './SkinCare.module.css';
import MedicList from '../../components/MedicList/MedicList';
const SkinCare = props =>{
    return(
        <div className={classes.SkinCare}>
            {/* <p>all medicine</p> */}
            <h2>SKIN CARE MEDICINE</h2>
            <MedicList type=''/>
        </div>
    );
}

export default SkinCare