import React from 'react'
import { PRODUCTS } from './Products'
import Product from './Product'
import '../Style.css'

function ShopPage() {
  return (
    <div className='ShopPage'>
        <div className='PageTitle'>
            <h1 className='display-5 d-flex justify-content-center pb-5'>Sadhguru Shopping Cart</h1>
        </div>
        <div className='Products'>
            {PRODUCTS.map((product)=>{
                return <Product key={product.id} id={product.id}icon={product.icon}  name={product.name} price={product.price}/>
            })}
        </div>
    </div>
  )
}

export default ShopPage