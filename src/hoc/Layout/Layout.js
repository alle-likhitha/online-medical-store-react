import React from 'react';
import MainToolbar from '../../components/MainToolbar/MainToolbar';
import Aux from '../Aux/Aux';
import {Route} from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = ({component: Component, ...rest}) =>{
    return(
        <Aux>
        <div>
            <MainToolbar />
        </div>

        <Route {...rest} render={matchProps => (  
        <LoginLayout>  
            <Component {...matchProps} />  
        </LoginLayout>  
      )} />  
      </Aux>

        
    );
}

// export const LoginLayout = (props)=>{

//     return(
//         <Aux>
//         <main className={classes.Space}>
//             {props.children}
//         </main>
//         </Aux>
//     );
// }
const LoginLayout = ({ children }) => (                         
    <main className={classes.Space}>
            {children}
        </main>
  );  
export const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <LoginLayout>  
            <Component {...matchProps} />  
        </LoginLayout>  
      )} />  
    )  
  };  

export default Layout;
