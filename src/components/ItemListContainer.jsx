import { Card, Flex, Text, Button, Image } from "@chakra-ui/react"
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
    return(
        <>
        <h1 style={heading}>{title}</h1>
        <Flex flexWrap='wrap' gap='2rem' justifyContent={'center'}>
        { products.map((product)=>(
            <Card.Root key={product.id} width="15rem" overflow="hidden" onClick={()=>navigate(`/${product.id}`)} cursor='pointer'>
            <Image
                src={product.thumbnail}
                alt={product.description}
            />
            <Card.Body gap="2">
                <Card.Title>{product.title}</Card.Title>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                ${product.price}
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
            </Card.Root>
        )) }
        </Flex>
        </>
    )
}

export default ItemListContainer