import CategoryListContainer from "@/components/CategoryListContainer";
import { useGetFirestoreDocs } from "@/hooks/useGetFirestoreDocs";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Home=()=>{
    const {categories}=useGetFirestoreDocs('categories');
    return(
        <Box>
            <Heading>Bienvenidos</Heading>
            <Flex>
                <CategoryListContainer categories={categories}/>
            </Flex>
        </Box>
    )
}

export default Home;