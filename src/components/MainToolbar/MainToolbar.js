import React from 'react';
import classes from './MainToolbar.module.css';
import Aux from '../../hoc/Aux/Aux';
import {Link, NavLink} from 'react-router-dom'
// import mediclogo from '../../assets/images/mediclogo.png';
// import storelogo from '../../assets/images/storelogo.png';
import logo from '../../assets/images/lala.png'
// import insta2 from '../../assets/images/insta2.png'
import {FiShoppingCart} from 'react-icons/fi';
import Toolbar from '../Toolbar/Toolbar';
// import Button from '../../ui/Button/Button';

const MainToolbar = props =>{
    return(
        <header className={classes.MainToolbar}>
            <Aux>
            <div className={classes.Logo}>
            <Link>
            <img src={logo} alt='Logo'/>
            </Link>
            </div>
            <h1>Medic Store</h1>
            <Aux>
            <div className={classes.LogoM} >
            {/* <img style={{height : '50px'}}src={insta2} alt='insta'/> */}
            <div className={classes.NavItem}>
            <FiShoppingCart size='20px' style={{color:'black'}}/>
            <NavLink activeClassName={classes.active}to='/med/cart'>Cart</NavLink> 
            </div>
            <div className={classes.NavItem}>
            <NavLink activeClassName={classes.active} to='/med/logout' exact >LogOut</NavLink>
            </div>
            
            </div>
            </Aux>
            </Aux>
            <Toolbar />
        </header>
        
    );
}

export default MainToolbar