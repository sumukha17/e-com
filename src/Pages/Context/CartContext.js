import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products'

export const cartContext = createContext(null);
    const getDefaultCart=()=>{
        let cart={}
        for(let i=1; i < PRODUCTS.length+1; i++ )
        {
        cart[i]=0;
    }
    return cart;
}
export const CartContextProvider = (props) => {
    const [CartItems,setCartItems] = useState(getDefaultCart())

const addToCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
}
const removeFromCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
}
    const cartValue = {CartItems,addToCart,removeFromCart}

  return <cartContext.Provider value={cartValue}>{props.children}</cartContext.Provider>
}
