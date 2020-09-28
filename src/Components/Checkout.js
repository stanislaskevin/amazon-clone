import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format"

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">  
                <img className="checkout_ad" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/08/FRgateway/SalesV2/XCM_Manual_1173376_XSite_fr_Sales_neon_style_400x39_Events_XCM_Manual_1173376_FR_Events_400x39_2_1560857006_jpg._CB444239282_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket, To buy one or "Add t basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        {/** list out all of Checkout Products */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
            
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>  
    )
    
} 
export default Checkout 
{/*basket.lenght > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
            
            <div className="checkout_left"></div>
            )*/}