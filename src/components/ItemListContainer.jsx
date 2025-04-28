import { Flex } from "@chakra-ui/react"
const contentStyle={
    justifyContent:'center',
    alignItems:'center',
    padding:'1rem',
    height:'60vh',
    backgroundColor:'ivory'
}
const ItemListContainer = ({placeholder}) => {
    return(
        <Flex style={contentStyle}>
            <p>{placeholder}</p>
        </Flex>
    )
}

export default ItemListContainer