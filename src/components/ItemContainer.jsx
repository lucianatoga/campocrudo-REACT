import { Image, Text, Button, Card, Box, Badge, HStack, Flex } from "@chakra-ui/react"
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const ItemContainer=({product})=>{
    const [i, setI]=useState(0);
    return(
         <Card.Root key={product.id} maxW="xl" flexDirection="row" justifyContent='space-between' overflow="hidden" padding='.5rem' >
            <Flex >
                <button cursor='pointer' onClick={()=>{i==0 ? setI(product.images.length-1) : setI(i-1)}}><IoIosArrowBack/></button>
                <Image fit="contain" maxW='250px'
                    src={product.images[i]}
                    alt={product.description}
                />
                <button cursor='pointer' onClick={()=>{i<product.images.length-1 ? setI(i+1) : setI(0)}}><IoIosArrowForward /></button>
            </Flex>
            <Box>
                <Card.Body gap="2">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Description>{product.description}</Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    ${product.price}
                    </Text>
                    <HStack mt="4">
                        {product.tags.map((tag, index)=>(<Badge key={index}>{tag}</Badge>))}
                    </HStack>
                </Card.Body>
                <Card.Footer gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost">Add to cart</Button>
                </Card.Footer>
            </Box>
        </Card.Root>
    )
}

export default ItemContainer;