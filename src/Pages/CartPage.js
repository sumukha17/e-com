import React, { useContext } from 'react'
import { PRODUCTS } from './Products'
import Cart from './Cart'
import {cartContext} from './Context/CartContext'
import { useNavigate } from 'react-router-dom'
import { ShoppingBagOpen } from 'phosphor-react'

function CartPage() {
    const {CartItems, getTotalAmount} = useContext(cartContext)
    const totalAmount = getTotalAmount()
    const navigate = useNavigate()
  return (
    <div className='CartPage' style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)", height:'50rem'}}>
        <div className='CartPageTitle display-5 d-flex justify-content-center mb-3 pt-5' >
            Your Cart Details:
        </div>
        <div className='CartDetails d-grid justify-content-center align-items-center px-2'>
            {PRODUCTS.map((product)=>{
                if(CartItems[product.id] !== 0 )
                {
                    return <Cart key={product.id} id={product.id}icon={product.icon}  name={product.name} price={product.price} />;
                }
            })}
        </div>
        {totalAmount > 0 ? (
             <div className='checkOut d-grid justify-content-center align-items-center mt-5'>
             <p className='totalAmount h-5'>Total Amount: $ {totalAmount}</p><br/>
         <button className='continueShoppingbtn bg-primary text-white shadow-5 rounded-5 mb-3 p-2' onClick={()=>navigate('/')}>Continue Shopping</button>
         <button className='checkOutbtn bg-success text-white rounded-5 mb-5 p-1 '>Check Out</button>
            </div>
        ):(
            <div className='emptyCart d-grid justify-content-center align-items-center mt-5'>
            <p className='empty display-5 d-flex justify-content-center tex'>!! Your Cart is Empty !!</p> 
            <button className='continueShoppingbtn bg-dark text-white rounded-5 mb-3 p-2' onClick={()=>navigate('/')}><ShoppingBagOpen/> Continue Shopping <ShoppingBagOpen/></button>
            </div>
        )}
       
    </div>

  )
}

export default CartPage