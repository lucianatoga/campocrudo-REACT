import CheckoutItem from "@/components/CheckoutItem";
import { CartContext } from "@/context/CartContext";
import { db } from "@/services/config/firebase";
import { Box, Button, Input, Heading, Text } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const Checkout=()=>{
    const[finalized, setFinalized]=useState(false);
     const [saleForm, setSaleForm]=useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        products:[],
        totalPrice:0
    });
    const [orderId, setOrderId]=useState();
    const [itemsForCheckout, setItemsForCheckout]=useState([]);

    const {cart, setCart, getTotalPrice}=useContext(CartContext);
    useEffect(()=>{
        setItemsForCheckout(cart.map((item)=>({title: item.title, price: item.price, quantity: item.quantity})));
    },[cart])
    const totalPrice=getTotalPrice();

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        const saleData={...saleForm,products:itemsForCheckout, totalPrice:totalPrice};
        
        const salesCollection=collection(db, 'sales');
        addDoc(salesCollection, saleData).then((doc)=>setOrderId(doc.id))
        .catch((error)=>console.error(error))
        .finally(()=>{setCart([]); setFinalized(true)})
    }
    return(
        finalized ? <Text>Muchas gracias por tu compra! Tu número de pédido es: <b>{orderId}</b></Text> :
        <CheckoutItem handleSubmit={handleSubmit} setSaleForm={setSaleForm} saleForm={saleForm}/>
    )
}

export default Checkout;