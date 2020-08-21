import React from 'react';
import classes from './Covid.module.css';
import MedicList from '../MedicList/MedicList';
const Covid = props =>{
    return(
        <div className={classes.Covid}>
            {/* <p>all medicine</p> */}
            <MedicList type=''/>
        </div>
    );
}

export default Covid