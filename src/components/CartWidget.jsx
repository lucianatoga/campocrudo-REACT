import { Flex } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = ()=>{
    return(
        <Flex >
            <IoCartOutline size={'1.5rem'}/>
            <p>0</p>
        </Flex>
    )
}
export default CartWidget