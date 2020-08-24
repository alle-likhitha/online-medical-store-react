import React from 'react';
import classes from './Immunity.module.css';
import MedicList from '../../components/MedicList/MedicList';
const Immunity = props =>{
    return(
        <div className={classes.Immunity}>
            
            {/* <p>all medicine</p> */}
            <h2>IMMUNITY</h2>
            <MedicList type=''/>
        </div>
    );
}

export default Immunity