import { Image, Text, Button, Card } from "@chakra-ui/react"
import { useNavigate } from "react-router"

const ItemContainer=({product})=>{
    const navigate=useNavigate()
    return(
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
    )
}

export default ItemContainer;