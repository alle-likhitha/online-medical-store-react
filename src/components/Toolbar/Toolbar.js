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
                <NavItem link='/med'>Home</NavItem>
                <NavItem link='/med/covid'>Corona Virus</NavItem>
                <NavItem link='/med/coldcough'>Cold & Cough</NavItem>
                <NavItem link='/med/immunity'>Immunity Boosters</NavItem>
                <NavItem link='/med/general'>General Medicies</NavItem>
                <NavItem link='/med/skincare'>Skin Care</NavItem>
                <NavItem link='/med/babycare'>Baby Care</NavItem>
                </div>
                
            </Aux>
    );
}

export default Toolbar