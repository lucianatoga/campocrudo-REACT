import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import './Cart.css' 
import { Flex, Heading } from "@chakra-ui/react";

const Cart=()=>{
    const {cart}=useContext(CartContext)
    return(
        cart.length==0 ? <Heading size='xl'>YOUR CART IS EMPTY</Heading> :
      <Flex className="shopping-cart-summary" height='100%' direction='column' gap='3rem'>
        <Heading size='xl'>CART DETAIL</Heading>
        <table className="items-table">
          <tr>
            <th>PRODUCT</th>
            <th></th>
            <th>TOTAL</th>
          </tr>
          {cart.map((item)=>(
            <tr>
              <td><img src={item.images[0]} alt={item.description}/></td>
              <td>
                <div className="item-details">
                    <b>{item.title}</b> 
                    <p>${item.price} u</p>
                    <div className="qty-input-bin-button">
                        <div className="qty-input">
                            <button>-</button>
                            <input type="number" defaultValue={item.quantity}/>
                            <button>+</button>
                        </div>
                        <button id="bin-button"></button>
                    </div>
                </div>
              </td>
              <td>${item.price*item.quantity}</td>
            </tr>
          ))}
        </table>
      </Flex>
    )
}

export default Cart;