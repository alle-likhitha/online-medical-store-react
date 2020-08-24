import React from 'react';
import classes from './Toolbar.module.css';
// import {NavItem } from 'react-router-dom'
import Aux from '../../hoc/Aux/Aux';
import NavItem from './NavItem/NavItem';
const Toolbar = props =>{
    return(
            <Aux >
                <div className={classes.Toolbar}>
                {/* <p>Corona Virus</p>
                <p>Cold & Cough</p>
                <p>Essential Supplments</p>
                <p>Immunity Boosters</p>
                <p>General Medicies</p>
                <p>Skin Care</p> */}
                <NavItem link='/'>Home</NavItem>
                <NavItem link='/covid'>Corona Virus</NavItem>
                <NavItem link='/coldcough'>Cold & Cough</NavItem>
                <NavItem link='/essential'>Essential Supplments</NavItem>
                <NavItem link='/immunity'>Immunity Boosters</NavItem>
                <NavItem link='/general'>General Medicies</NavItem>
                <NavItem link='/skincare'>Skin Care</NavItem>
                </div>
                
            </Aux>
    );
}

export default Toolbar