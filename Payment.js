import React, { useEffect, useState } from 'react';
import './Payment.css'
import { UseStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import  axios from './Axios';
import { db } from './Deep';


function Payment() {
    

    const[{basket, user}, dispatch] = UseStateValue();
    const history = useNavigate();

    const stripe= useStripe();
    const elements = useElements();

    const[succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState('');


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

     const[clientSecret, setClientSecret] = useState(true);

     useEffect(()=>{

        const getClientSecret = async () =>{
            
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
     }, [basket])

     console.log('THE Secret is >>', clientSecret);

    const handleSubmit = async (e) =>{
        // use stripe

        e.preventDefault();
        setProcessing(true);

        // const payload = await stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {


            db.collection('users')
            .doc(user?.id)
            .collection('orders')
            .doc(paymentIntent.id)
               .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
               })


            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history('/orders', {replace: true});
        }) 
    }


    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }



  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout {<Link to= '/checkout'>({basket?.length} items)</Link>}
            </h1>
            {/* delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                <h3>Delivery address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 Reat Lane</p>
                    <p>Los Angele, CA</p>
                </div>

            </div>


            {/* Review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__item'>
                    {basket.map(item=>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        ))
                    }
                </div>
            </div>


            {/* payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* use of stripe */}

                        <form onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>

                            <div className='payment__price'>
                                <CurrencyFormat  
                                renderText={(value)=>(
                                
                                
                                <h3>Order Total: {value}</h3>

                                
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeperator={true}
                                prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {/* fail safe */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment