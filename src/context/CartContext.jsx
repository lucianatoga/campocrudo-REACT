import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart, setCart]=useState([]);

    const addToCart=({product})=>{
        setCart((prevCart)=>{
            if(prevCart.find((item)=>item.id===product.id)){
                return (prevCart.map((item)=>item.id===product.id ? {...item, quantity:item.quantity+1} : item))
            }
            else{
                return([...prevCart, {...product, quantity:1}])
            }
        })
    }

    const decreaseQty=({product})=>{

        setCart((prevCart)=>{
            const prodInCart = prevCart.find((item)=>item.id===product.id);
            if(prodInCart.quantity>1){
                return prevCart.map((item)=>
                item.id===product.id ? {...item, quantity:item.quantity-1} : item)
            }
            if(prodInCart.quantity===1){
                return prevCart.filter((item)=>item.id!==product.id)
            }
             
        })
    }

    const getItemsCount=()=>{
        return cart.reduce((acc, item)=> acc+item.quantity, 0);
    }

    const getTotalPrice=()=>{
        return cart.reduce((acc, item)=> acc+(item.price*item.quantity), 0);
    }
    return(
        <CartContext.Provider value={{cart, setCart, addToCart, decreaseQty, getItemsCount, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}