import { CartContext } from "@/context/CartContext";
import { Card, Flex, Text, Button, Image } from "@chakra-ui/react"
import { useContext } from "react";
import { useNavigate } from "react-router";
// const contentStyle={
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'1rem',
//     height:'60vh',
//     backgroundColor:'ivory'
// }
const heading={
    fontWeight:'500',
    fontFamily: '"Meow Script", cursive',
    fontSize:'2rem',
    paddingBottom:'1rem'
}
const ItemListContainer = ({title, products}) => {
    const navigate=useNavigate();
    const{addToCart}=useContext(CartContext)

    return(
        <>
        <h1 style={heading}>{title}</h1>
        <Flex flexWrap='wrap' gap='2rem' justifyContent={'center'}>
        { products.map((product)=>(
            <Card.Root key={product.id} width="15rem" overflow="hidden" >
            <Image maxHeight='19rem' onClick={()=>navigate(`/product/${product.id}`)} cursor='pointer'
                src={product.images[0]}
                alt={product.description}
            />
            <Card.Body gap="1">
                <Card.Title>{product.title}</Card.Title>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                ${product.price}
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <Button backgroundColor='linen' border='1px solid gray' color='black' variant="solid" size='md' onClick={()=>{addToCart({product})}}>Agregar al carrito</Button>
            </Card.Footer>
            </Card.Root>
        )) }
        </Flex>
        </>
    )
}

export default ItemListContainer