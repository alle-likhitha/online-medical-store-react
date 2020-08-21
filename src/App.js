import React from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Covid from './components/Covid/Covid';
import Medicstore from './containers/Medicstore/Medicstore';
function App() {
  let routes = (
    <Switch>
      {/* <Route path='/tvshows' exact component={TvShows} />
      <Route path='/movies' exact component={Movies} />
      <Route path='/' exact component={NetflixMain} />
      <Route path='/referfriends' exact component={GiftPage} /> */}
      <Route path='/covid' exact component={Covid} />
      <Route path='/' exact component={Medicstore} />
      <Redirect to='/' />
    </Switch>
  );
  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
