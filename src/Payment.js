import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StatusProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();  
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
  return (
    <div className='payment'>
    <div className='payment__container'>
        {/* delivery address */}
        <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className='payment__section'>
             {/* payment section */}
             <div className='payment__title'>
                <h3>Delivery Adress</h3>
             </div>
             <div className='payment__address'>
                <p>{user?.email}</p>
                <p>NIT Kurukshetra</p>
                <p>Hostel No. 4</p>
                <p>HARYANA 136119</p>
             </div>
        </div>
        <div className='payment__section'>
               {/* review section */}
               <div className='payment__title'>
                <h3>Review items and delivery</h3>
               </div>
               <div className='payment__items'>
               {basket.map(item=>(
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
             
            ))
            } 
               </div>
            </div>
            <div className='payment__section'>
              {/* payment method */}
               <div className='payment__title'>
               <h3>Payment Method</h3>
              
              </div>  
              <div className='payment__details'>
              {/* stripe magic will go */}
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                {/* <CardElement onChange={handleChange}/> */}
              <CardElement/>
              <div className='payment__priceContainer'>
              <CurrencyFormat
    renderText={(value)=>(
        
            <h3>
                Order Total: {value}
            </h3>
      
        
    )}

    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />
    <button disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p> :
        "Buy Now"}</span>
    </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
              </form>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Payment