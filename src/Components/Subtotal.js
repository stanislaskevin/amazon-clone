import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider"
import { getBasketTotal } from '../reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
                {/**Price*/}
            <CurrencyFormat 
                    renderText={(value) => (
                        <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> this order contains
                        </small>
                        </>
                    )}

                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
{/*<CurrencyFormat 
                    renderText={(value) => (
                        <p>
                            Subtotal ({basket.lenght} items): <strong>{}</strong>)
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> this order contains
                        </small>
                    )}
                    
                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    />*/}