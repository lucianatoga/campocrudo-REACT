import { CartContext } from "@/context/CartContext";
import { db } from "@/services/config/firebase";
import { Box, Button, Input, Heading, Text } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const Checkout=()=>{
    const[finalized, setFinalized]=useState(false);
    const {cart, setCart, getTotalPrice}=useContext(CartContext);
     const [saleForm, setSaleForm]=useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        products:[],
        totalPrice:0
    })
    const [orderId, setOrderId]=useState()
    const[itemsForCheckout, setItemsForCheckout]=useState([])
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
        <Box>
            <Heading marginBottom='2rem'>Por favor complete el formulario para finalizar</Heading>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <Input type='text' placeholder="Nombre completo" onChange={(e)=>setSaleForm({...saleForm, fullName: e.target.value})}/>
            <Input type='email' placeholder="Email" onChange={(e)=>setSaleForm({...saleForm, email: e.target.value})}/>
            <Input type='number' placeholder="Telefono" onChange={(e)=>setSaleForm({...saleForm, phoneNumber: e.target.value})}/>
            <Button type='submit' marginTop='1rem'>Finalizar compra</Button>
        </form>
        </Box>
    )
}

export default Checkout;