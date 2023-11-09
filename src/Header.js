import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from './firebase';

// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 import { useStateValue } from './StatusProvider';

function Header() {
  const [{basket,user},dispatch]=useStateValue();
  const handleAuthenticaton=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div id='hd' className='header'>
   <Link to="/">
    <img className='header_logo' 
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"

      /> 
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
    <div className='header__nav'>
    <Link to={!user && "/login"}>
    <div onClick={handleAuthenticaton}
     className='header__option'>
  
    <span className='header__optionLineOne'>Hello {user? user.email:"Guest"}</span>
    <span className='header__optionLineTwo'>{user ?"Sign Out":"Sign In"}</span>
   
    </div>
    </Link>
    <div className='header__option'>
    <span className='header__optionLineOne'>Retrurn</span>
    <span className='header__optionLineTwo'>& Order</span>
      </div>
      <div className='header__option'>
      <span className='header__optionLineOne'>Your</span>
    <span className='header__optionLineTwo'>Prime</span>
      </div>
      <Link to="/checkout">
      <div className='header__optionBasket'>
    
        <ShoppingBasketIcon/>
        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                                                {/* basket.length-->0 optional chaining */}
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Header