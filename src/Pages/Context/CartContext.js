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

const getTotalAmount = () =>{
let totalAmount=0;
    for(const item in CartItems){
        if(CartItems[item] > 0){
            let itemInfo = PRODUCTS.find((product)=>product.id === Number(item));
            totalAmount += CartItems[item] * itemInfo.price;
        }
    } 
return totalAmount;
}

const addToCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
}
const removeFromCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
}
const updateCartInput=(newAmount,id)=>{
    setCartItems((prev)=>({...prev,[id]:newAmount}))
}
    const cartValue = {CartItems,addToCart,removeFromCart,updateCartInput,getTotalAmount}

  return <cartContext.Provider value={cartValue}>{props.children}</cartContext.Provider>
}
