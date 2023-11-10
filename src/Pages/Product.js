import React, { useContext } from 'react'
import '../Style.css'
import {cartContext} from './Context/CartContext'

function Product({id,icon,name,price}) {
  const {addToCart,CartItems} = useContext(cartContext)
  const cartItemAmount = CartItems[id];
  return (
    <div className='Product bg-dark text-white '>
            <img src={icon} alt='' className='imgicon rounded-3 pb-3'/>
            <p>{id}</p>
            <p>{name}</p>
            <p>${price}</p>
            <button className='addTobtn btn btn-secondary btn-sm active' onClick={()=>{addToCart(id)}}>Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product;