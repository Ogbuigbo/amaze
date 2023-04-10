import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { auth } from './Deep';


function Header() {

    
    const [{basket, user}, dispatch] = UseStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to = '/' >
        <img className='header__logo'
        src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695'
        alt='' /> 
        </Link>

        <div className='header__search'>
          <input  className='header__searchinput' type="text"/> 
          <SearchIcon className='header__searchicon' /> 
        </div>   

        <div className='header__nav'>
            <Link to={!user && 'login'} >
            <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionone'>
                Hello {!user ? 'guest' : user.email}
                </span>
                <div className='header__optiontwo'>
                    {user ? 'Sign Out': 'Sign In'}
                </div>
            </div>
            </Link>



            <div className='header__option'>
            <span className='header__optionone'>
                    Return
                </span>
                <span className='header__optiontwo'>
                    & Orders
                </span>
            </div>

            <div className='header__option'>
            <span className='header__optionone'>
                    Your
                </span>
                <span className='header__optiontwo'>
                    Prime
                </span>
            </div>


            <Link to='checkout'>
            <div className='header__optionbasket'>
            <ShoppingBasketIcon />
            <span className='header__optiontwo header__basketcount'>{basket?.length}</span>
            </div>
            </Link>
            
        </div>
        

    </div>
  )
}

export default Header