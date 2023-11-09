import React, { useContext } from 'react'
import { PRODUCTS } from './Products'
import Cart from './Cart'
import {cartContext} from './Context/CartContext'

function CartPage() {
    const {CartItems} = useContext(cartContext)
  return (
    <div className='CartPage bg-white'>
        <div className='CartPageTitle display-5 d-flex justify-content-center m-3'>
            Your Cart Details
        </div>
        <div className='CartDetails d-grid justify-content-center align-items-center px-2'>
            {PRODUCTS.map((product)=>{
                if(CartItems[product.id] !== 0 )
                {
                    return <Cart key={product.id} id={product.id}icon={product.icon}  name={product.name} price={product.price} />;
                }
            })}
        </div>
    </div>

  )
}

export default CartPage