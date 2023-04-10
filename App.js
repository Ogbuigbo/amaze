import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './Deep';
import Header from './Header';
import Home from './Home';
import Login from './Login ';
import { UseStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders  from './Orders';

const promise= loadStripe('pk_test_51MURKmEpRcJz3xZ0JECJzFAIdVp7UvW8S8byhUZOa6d9FPNKN7SERojluJDtOlNJRLdVLPS6SdyDMwmCLbO8prbD00jHdnaW6O');

function App() {

  const[{}, dispatch] = UseStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged((authUser)=>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
  }, [])

  return (
    
    <div className="App">
      <Routes>
      <Route exact path = "orders"   element= {<><Orders/></>} />
      <Route exact path="/" element={<><Header/><Home/></>}/>
      <Route exact path="checkout" element={<><Header/><Checkout/></>}/>
      <Route exact path = "login"   element= {<><Login/></>} />
      <Route exact path = "payment"   element= {<><Header /><Elements stripe={promise}><Payment/></Elements></>} />
          </Routes>
      </div>
  );
}

export default App;
