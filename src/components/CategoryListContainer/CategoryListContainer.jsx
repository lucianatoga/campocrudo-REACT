import { Card, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";
import './CategoryListContainer.css'

const CategoryListContainer=({categories})=>{
    const navigate=useNavigate()
    return(
        <Flex className="cards-container">
            {categories.map((cat)=>(
                <Card.Root key={cat.id} variant='elevated' maxW="xl" className="category-card">
                    <Image width="100%" height="100%" src={cat.image} alt={cat.alt}/>
                    <Button  size="lg" onClick={()=> navigate(`/category/${cat.slug}`)}>{cat.name} <FiPlus /> </Button>
                </Card.Root>
            ))}
        </Flex>
    )
}
export default CategoryListContainer;