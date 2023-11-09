import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
    <div className='footer__option1'>
      <p>Back to top</p>
  
      {/* <div onClick={} <a class="nav-link " href="#hd">Bact to top</a>
    </div> */}
    </div>
    <div className='footer__option2'>
    <div className='op1'>
        <h4>Connect with us</h4>
        <p>Linkedin</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twiter</p>
        </div>
        <div className='op2'>
        <h4>Let Us Help You</h4>
    <p>COVID-19 and Amazon</p>
    <p>Your Account</p>
   <p>Returns Centre</p>
<p>100% Purchase Protection</p>
<p>Amazon App Download</p>
<p>Help</p>
        </div>
        <div className='op3'>
       <h4> Get to Know Us</h4>
     <p>About Us</p>
      <p>
Careers
</p>
<p>Press Releases</p>
<p>Amazon Science</p>
        </div>
        <div className='op4'>
        <h4>Make Money with Us</h4>
     <p>Sell on Amazon</p>Sell on Amazon
    <p>Sell under Amazon Accelerator</p>
     <p>Protect and Build Your Brand</p>
     <p>Amazon Global Selling</p>
        </div>
    </div>
    <div className="horizontal-line"></div>
<div className='footer__option3'>
<Link to="/">
    <img className='header_logo' 
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      /> 
      </Link>

</div>
 <div class=" footer__bottomOption">
    <a class="aa footer__link" href="https://www.linkedin.com/in/abuzar-ali-1602a4232/">LinkedIn</a>
    <a class="aa footer__link" href="https://www.instagram.com/accounts/onetap/?next=%2F">Instagram</a>
    <a class=" aa footer__link" href="https://challenge-f8d38.web.app/">Website</a>
    <p class="copyright">© 2023 Abuzarali @The drx Web</p>
  </div>
    </div>
  )
}

export default Footer