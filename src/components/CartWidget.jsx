import { CartContext } from "@/context/CartContext";
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const CartWidget = ()=>{
    const{ getItemsCount}=useContext(CartContext);
    const totalCount=getItemsCount();
    const navigate=useNavigate()
    return(
        <Flex >
            <Button variant="solid" className="navbar-btn" size="md" onClick={()=>{navigate('/cart')}} style={{cursor:'pointer'}}>
                <IoCartOutline size={'1.5rem'}/>
                <p>{totalCount}</p>
                </Button>
            
        </Flex>
    )
}
export default CartWidget