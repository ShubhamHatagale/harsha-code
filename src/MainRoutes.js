import './App.css';
import React, {useState, useEffect, setState} from 'react'
import Header from './component/Header'
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Newsletter from './component/Newsletter';
import Instagram from './component/Instagram';
import Footer from './component/Footer';
import AnimatedCursor from "react-animated-cursor"
import Preloader from './component/Preloader';
import Model from './component/Model';


function MainRoutes() {


  return (
    <>

      
  
    {/* <AnimatedCursor 
      innerSize={10}
      outerSize={50}
      color='0,0,0'
      outerAlpha={0.5}
      innerScale={1}
      outerScale={2} /> */}
    
    

    <Switch>
          <Route exact path="/">  <Home /> </Route>
           
          <Route exact path="/About"> <About /> </Route>
        
          <Route exact path="/Collection"> <Collection /> </Route>
     
          <Route exact path="/Contact"> <Contact/> </Route>
         
          <Route exact path="/Products" > <Products /> </Route>

          <Route exact path="/Productdetails" > <ProductDetails/>  </Route>
      </Switch>



        
        

    </>

    

  );
}

export default MainRoutes;
