import React,{ useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Footer  from './Footer';

import{BrowserRouter as Router,Routes,Route}
from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StatusProvider';
import {loadStripe} from '@stripe/stripe-js';
import  {Elements} from "@stripe/react-stripe-js";

// Switch case replaced by Routes
function App() {
  const promise=loadStripe(
  'pk_test_51NYvl8SBGFy4jduIdbjvnjhU05R1RkZemnD9kweMUA0ZjEboztPt4oXkxVWRH7DakZlAjz1PKXIyLk2M5GPeelY500wcWvjZdh'
    );
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
  //will this run only once when the app Component loads
  auth.onAuthStateChanged(authUser=>{
    console.log("THE USER IS >>",authUser);
    if(authUser){
      //the user just logged in or the user was logged in already
      dispatch({
        type:"SET_USER",
        user:authUser

      })
    }else{
      //user is logged out
      dispatch({
        type:"SET_USER",
        user:null

      })

    }
  })
  },[])
  return (
    <Router>
    <div className="app">
    {/* <Header/> */}
      <Routes>

    <Route path="/login"
      element={<Login/>}/>
   
    <Route exact path="/checkout" element={<><Header/><Checkout/><Footer/></>}/>
    <Route exact path="/payment" element={<><Header/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
    </>}/>
   <Route exact path="/" element={<><Header/><Home/><Footer/></>}/>
    
    </Routes>
   
    </div>
    </Router>
  );
}

export default App;
