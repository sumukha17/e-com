import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'


function Navbar() {
  return (
    <div className='navbar d-flex justify-content-end'>
        <NavLink to='/' className="ShopLink pe-5 text-white text-decoration-none ">Shop</NavLink>
        <NavLink to='/Cart' className="CartLink pe-5 text-white"><ShoppingCart size={23}/></NavLink>
    </div>
  )
}

export default Navbar