import React from 'react'
import '../Style.css'

function Cart({id,icon,name,price}) {
  return (
    <div className='Cart d-flex justify-content-space-around align-items-center p-2 bg-dark text-white m-3 rounded-5 shadow-lg'>
        <img src={icon} alt='' className='imgicon rounded-5 mx-3 my-3 w-25'/>
            <p className='name mx-5'>{name}</p>
            <p className='price me-5'>{price}</p>
    </div>
  )
}

export default Cart