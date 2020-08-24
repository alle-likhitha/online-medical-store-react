import React from 'react';
import classes from './EssentialSupp.module.css';
import MedicList from '../../components/MedicList/MedicList';
const EssentialSupp = props =>{
    return(
        <div className={classes.EssentialSupp}>
            {/* <p>all medicine</p> */}
            <h2>ESSENTIAL SUPPLEMENTS</h2>
            <MedicList type=''/>
        </div>
    );
}

export default EssentialSupp