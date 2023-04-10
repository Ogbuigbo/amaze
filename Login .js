import { AppBar } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import "firebase/auth";
import { auth } from './Deep';

function Login () {

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signIn = e =>{
    e.preventDefault();

    // we use firebase

    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth =>{
      history('/')
    })
    .catch(error=> alert(error.message))
  }


  const createAccount= e =>{
    e.preventDefault();

    // we use firebase
   auth
   .createUserWithEmailAndPassword(email,password)
   .then((auth)=>{
    if(auth) {
      history('/')
    }
   })
   .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
      alt='' />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


          <button onClick={signIn} type='submit' className='login__signinbtn'>Sign In</button>
        </form>

        <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={createAccount}
         className='login__registerbtn'>
          Create your fake Amazon acout</button>
      </div>
       </div>
  )
}

export default Login 