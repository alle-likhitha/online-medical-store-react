import React, { Component , Suspense} from 'react';
import './App.css';
// import {connect} from 'react-redux'
import {Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Authentication/Auth';
import { LoginLayoutRoute } from './hoc/Layout/Layout';
// import Logout from './components/Logout/Logout';
import Spinner from './ui/Spinner/Spinner';
import Medicstore from './containers/Medicstore/Medicstore';

const Covid= React.lazy(()=>{
  return import('./containers/Covid/Covid')
})

const ColdCough= React.lazy(()=>{
  return import('./containers/ColdCough/ColdCough')
})
const BabyCare= React.lazy(()=>{
  return import('./containers/BabyCare/BabyCare')
})

const Immunity= React.lazy(()=>{
  return import('./containers/Immunity/Immunity')
})
const SkinCare= React.lazy(()=>{
  return import('./containers/SkinCare/SkinCare')
})
const General= React.lazy(()=>{
  return import('./containers/General/General')
})
const Cart= React.lazy(()=>{
  return import('./containers/Cart/Cart')
})
const Checkout= React.lazy(()=>{
  return import('./containers/Checkout/Checkout')
})
class App extends Component{
  render(){

    return(
      <Suspense fallback={<Spinner />}>
      <Switch>
        <Layout key='1' path='/med/covid' exact component={Covid} />
        <Layout key = '2' path='/med/coldcough' exact component = {ColdCough} />
        <Layout key='3' path='/med/babycare' exact component = {BabyCare} />
        <Layout key='4' path='/med/Immunity' exact component = {Immunity} />
        <Layout key='5' path='/med/general' exact component = {General} />
        <Layout key='6' path='/med/skincare' exact component = {SkinCare} />
        <Layout key='7' path='/med/cart' exact component = {Cart} />
        <Layout key='9' path='/med/cart/checkout' exact component = {Checkout} />
        <Layout key='8' path='/med' exact component={Medicstore} /> 
        <LoginLayoutRoute path="/"exact component={Auth} />  
        <Redirect to='/' />

      </Switch>
      </Suspense>
    )
}}
export default withRouter(App)

