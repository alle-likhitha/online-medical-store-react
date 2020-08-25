import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Covid from './containers/Covid/Covid';
import Medicstore from './containers/Medicstore/Medicstore';
import Auth from './containers/Authentication/Auth';
import ColdCough from './containers/ColdCough/ColdCough';
import BabyCare from './containers/BabyCare/BabyCare';
import Immunity from './containers/Immunity/Immunity';
import SkinCare from './containers/SkinCare/SkinCare';
import General from './containers/General/General';
import { LoginLayoutRoute } from './hoc/Layout/Layout';
import Logout from './containers/Authentication/Logout/Logout';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
// import { useLocation } from 'react-router-dom'



class App extends Component{
 
  render(){
    

  // let lay = <Layout />
  // let routes = (
    // <Switch>
    //   {/* <Route path='/tvshows' exact component={TvShows} />
    //   <Route path='/movies' exact component={Movies} />
    //   <Route path='/' exact component={NetflixMain} />
    //   <Route path='/referfriends' exact component={GiftPage} /> */}
    //   <Route path='/med/covid' exact component={Covid} />
    //   <Route path='/med/coldcough' exact component = {ColdCough} />
    //   <Route path='/med/essential' exact component = {EssentialSupp} />
    //   <Route path='/med/Immunity' exact component = {Immunity} />
    //   <Route path='/med/general' exact component = {General} />
    //   <Route path='/med/skincare' exact component = {SkinCare} />
    //   {/* <Route path='/' exact component = {Auth}   /> */}
    //   <Route path='/med' exact component={Medicstore} />   
    //   <Route exact path="/">  
    //         <Redirect to="/" />  
    //       </Route>  
    //       <LoginLayoutRoute path="/" component={Auth} />     
    //   <Redirect to='/' />
    // </Switch>
  // );
  // let lay = <Layout />
  // if (Route.path === '/'){
  //   lay = <LoginLayout />
  //   console.log('yep its woeking')
    
  // }
  // else{
  //   return (
  //     <div>
  //       <Layout >
  //       {routes}
  //       </Layout>
          
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* {lay}
      {routes} */}
      <Switch>
      {/* <Layout path='/tvshows' exact component={TvShows} />
      <Route path='/movies' exact component={Movies} />
      <Route path='/' exact component={NetflixMain} />
      <Route path='/referfriends' exact component={GiftPage} /> */}
      
      <Layout key='1' path='/med/covid' exact component={Covid} />
      <Layout key = '2' path='/med/coldcough' exact component = {ColdCough} />
      <Layout key='3' path='/med/babycare' exact component = {BabyCare} />
      <Layout key='4' path='/med/Immunity' exact component = {Immunity} />
      <Layout key='5' path='/med/general' exact component = {General} />
      <Route  path='/med/logout' exact component= {Logout} />
      <Layout key='6' path='/med/skincare' exact component = {SkinCare} />
      <Layout key='7' path='/med/cart' exact component = {Cart} />
      <Layout key='9' path='/med/cart/checkout' exact component = {Checkout} />
      <Layout key='8' path='/med' exact component={Medicstore} /> 

      {/* <Route exact path="/">  
            <Redirect to="/" />  
          </Route>   */}
      <LoginLayoutRoute path="/" component={Auth} />     
      <Redirect to='/med' />
    </Switch>
        
    </div>
  );
}
}

export default withRouter(App);
