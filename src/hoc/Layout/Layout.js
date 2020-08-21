import React from 'react';
import MainToolbar from '../../components/MainToolbar/MainToolbar';
import Aux from '../Aux/Aux';

import classes from './Layout.module.css';

const Layout = (props) =>{
    return(
        <Aux>
        <div>
            <MainToolbar />
        </div>

        <main className={classes.Space}>
            {props.children}
        </main>
        </Aux>

        
    );
}

export default Layout;