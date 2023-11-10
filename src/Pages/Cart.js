import React from 'react'
import '../Style.css'
import {cartContext} from './Context/CartContext'
import { useContext } from 'react'

function Cart({id,icon,name,price}) {
    const {CartItems, addToCart, removeFromCart, updateCartInput} = useContext(cartContext)
  return (
    <div className='Cart d-flex justify-content-space-around align-items-center p-2 bg-dark text-white m-3 rounded-5 shadow-lg'>
        <img src={icon} alt='' className='imgicon rounded-5 mx-3 my-3 w-25'/>
        <div className='CartDesc d-grid justify-content-space-around align-items-center'>
            <p className='name ms-5 fs-3'>{name}</p>
            <p className='price ms-5 fst-italic'>{price}</p><br/>
            <div className='countHandler d-felx justify-content-center align-items-center p-2'>
                <button className='rembtn btn-sm' onClick={()=>{removeFromCart(id)}}> - </button>
                <input value={CartItems[id]} onChange={(e)=>updateCartInput(Number(e.target.value),id)} className='prevCountInput form-outline w-25'/>
                <button className='addbtn btn-sm' onClick={()=>{addToCart(id)}}> + </button>
            </div>
        </div>
    </div>
  )
}

export default Cart