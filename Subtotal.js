import React from 'react';
import './Subtotal.css'
import CurencyFormat from "react-currency-format";
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';



function Subtotal() {

  const history = useNavigate();
  const [{basket}, dispatch] = UseStateValue();


  return (
    <div className='subtotal'>
        <CurencyFormat
        renderText={(value)=>(
            <>
            <p>
             Subtotal ({basket?.length} items): <strong>
              {value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
        />

        <button onClick={e => history('/payment') }>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal