import { CartContext } from "@/context/CartContext";
import { Image, Text, Button, Card, Box, Badge, HStack, Flex } from "@chakra-ui/react"
import { useContext, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const ItemContainer=({product})=>{
    const [i, setI]=useState(0);
    const {addToCart}=useContext(CartContext);
    const arrowsEnabled={cursor:'pointer', color:'black'};
    const arrowsDisabled={cursor:'auto', color:'gray'}
    return(
         <Card.Root key={product.id} maxW="xl" flexDirection="row" justifyContent='space-between' overflow="hidden" padding='.5rem' height='23rem'>
            <Flex>
                <button onClick={()=>{i==0 ? setI(product.images.length-1) : setI(i-1)}}><IoIosArrowBack style={product.images.length>1 ? arrowsEnabled : arrowsDisabled}/></button>
                <Image  maxHeight='25rem' aspectRatio={3 / 4}
                    src={product.images[i]}
                    alt={product.description}
                />
                <button onClick={()=>{i<product.images.length-1 ? setI(i+1) : setI(0)}}><IoIosArrowForward style={product.images.length>1 ? arrowsEnabled : arrowsDisabled}/></button>
            </Flex>
            <Flex direction='column' height='90%' width='45%'>
                <Card.Body gap="2">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Description>{product.description}</Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    ${product.price}
                    </Text>
                </Card.Body>
                <Card.Footer gap="2" >
                    <Button backgroundColor='linen' border='1px solid gray' color='black' variant="solid" size='md' onClick={()=>{addToCart({product})}}>Agregar al carrito</Button>
                </Card.Footer>
            </Flex>
        </Card.Root>
    )
}

export default ItemContainer;