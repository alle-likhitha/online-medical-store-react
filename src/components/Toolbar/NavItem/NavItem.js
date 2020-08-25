import React from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';


const navItems = (props) =>(
    <div className={classes.NavItem}>
        <NavLink activeClassName={classes.active} to={props.link} exact >{props.children}</NavLink>
    {/* <Link to='/'>{props.children}</Link> */}
    </div>
);

export default navItems;