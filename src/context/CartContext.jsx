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
        console.log(cart)
    }
    //add CONDITIONALLY (if prod.qty > 1 show, else disable) to an onClick event to the cart (-) buttons
    const decreaseQty=({product})=>{
        setCart((prevCart)=>{
            return prevCart.map((item)=>{item.id===product.id ? {...item, quantity:item.quantity-1} : item})
        })
    }

    const getItemsCount=()=>{
        return cart.reduce((acc, item)=> acc+item.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, decreaseQty, getItemsCount}}>
            {children}
        </CartContext.Provider>
    )
}