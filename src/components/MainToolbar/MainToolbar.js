import React from 'react';
import classes from './MainToolbar.module.css';
import Aux from '../../hoc/Aux/Aux';
import {Link} from 'react-router-dom'
// import mediclogo from '../../assets/images/mediclogo.png';
// import storelogo from '../../assets/images/storelogo.png';
import logo from '../../assets/images/lala.png'
// import insta2 from '../../assets/images/insta2.png'
import {FiShoppingCart} from 'react-icons/fi';
import Toolbar from '../Toolbar/Toolbar';

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
            <div className={classes.Logo} >
            {/* <img style={{height : '50px'}}src={insta2} alt='insta'/> */}
            <FiShoppingCart />
            <h3 style={{padding:'10px'}}>Cart</h3>
            <h3>Sign up</h3>
            </div>
            
            
            </Aux>
            <Toolbar />
        </header>
        
    );
}

export default MainToolbar