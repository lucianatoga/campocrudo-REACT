import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartItem from "@/components/Cart/CartItem";
import { Heading } from "@chakra-ui/react";

const Cart=()=>{
    const {cart}=useContext(CartContext)
        return(
            cart.length==0 ? <Heading size='xl'>CARRITO VACÍO</Heading> : <CartItem/>
        )
}

export default Cart;