import React, { Component } from 'react'
import classes from './Medicstore.module.css';

import Photo from '../../components/Photo/Photo';

class Medicstore extends Component{
    render(){
        return(
            <div className={classes.Medicstore}>
                <Photo />
            </div>
        );
    }
}

export default Medicstore