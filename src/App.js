import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Covid from './containers/Covid/Covid';
import Medicstore from './containers/Medicstore/Medicstore';
import Auth from './containers/Authentication/Auth';
import ColdCough from './containers/ColdCough/ColdCough';
import EssentialSupp from './containers/EssentialSupp/EssentialSupp';
import Immunity from './containers/Immunity/Immunity';
import SkinCare from './containers/SkinCare/SkinCare';
import General from './containers/General/General';


class App extends Component{
  render(){

  // let lay = <Layout />
  let routes = (
    <Switch>
      {/* <Route path='/tvshows' exact component={TvShows} />
      <Route path='/movies' exact component={Movies} />
      <Route path='/' exact component={NetflixMain} />
      <Route path='/referfriends' exact component={GiftPage} /> */}
      <Route path='/covid' exact component={Covid} />
      <Route path='/coldcough' exact component = {ColdCough} />
      <Route path='/essential' exact component = {EssentialSupp} />
      <Route path='/Immunity' exact component = {Immunity} />
      <Route path='/general' exact component = {General} />
      <Route path='/skincare' exact component = {SkinCare} />
      <Route path='/' exact component={Medicstore} />
      <Route path='/auth' exact component = {Auth} />
      
      
      <Redirect to='/' />
    </Switch>
  );
  return (
    <div>
      <Layout >
      {routes}
      </Layout>
        
    </div>
  );
}
}

export default withRouter(App);
