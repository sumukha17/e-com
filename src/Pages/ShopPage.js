import React from 'react'
import { PRODUCTS } from './Products'
import Product from './Product'
import '../Style.css'

function ShopPage() {
  return (
    <div className='ShopPage' style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}}>
        <div className='PageTitle pt-5'>
            <h1 className='display-5 d-flex justify-content-center text-light pb-5'><i><b>Stark</b></i>&nbsp; Shopping Cart</h1>
        </div>
        <div className='Products d-grid justify-content-center align-items-center'>
            {PRODUCTS.map((product)=>{
                return <Product key={product.id} id={product.id}icon={product.icon}  name={product.name} price={product.price}/>
            })}
        </div>
    </div>
  )
}

export default ShopPage