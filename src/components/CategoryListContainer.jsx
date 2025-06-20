import { Card, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

const CategoryListContainer=({categories})=>{
    const navigate=useNavigate()
    return(
        <Flex justifyContent='space-evenly' width='100%'  flexWrap='wrap' rowGap='1rem'>
            {categories.map((cat)=>(
                <Card.Root key={cat.id} maxW="xl"overflow="hidden" height='15rem' width='20rem'>
                    <Image width="100%" height="100%" src={cat.image} alt={cat.alt}/>
                    <Button variant="outline"  size="lg" color='black' position='absolute' left='8rem' top='6rem' backdropFilter='blur(5px)' onClick={()=> navigate(`/category/${cat.slug}`)}>{cat.name} <FiPlus /> </Button>
                </Card.Root>
            ))}
        </Flex>
    )
}
export default CategoryListContainer;