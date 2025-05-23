import { Button, Menu, Portal, Flex, Text } from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io";
import CartWidget from "./CartWidget"
import { useEffect, useState } from "react";
import { getAllCategories } from "@/services/products.service";
import { useNavigate } from "react-router";

const headerStyle={
    justifyContent:'space-between', 
    alignItems: 'center',
    border:'1px solid #DCDCDC',
    padding: '1rem 2rem',
    backgroundColor:'linen'
}

const NavBar = () => {
    const [categories, setCategories]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        getAllCategories().then((res)=>{setCategories(res.data)})
        .catch((error)=>console.error(error))
    },[])
    return(
        <Flex style={headerStyle}>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" size="md">catálogo <IoMdMenu /></Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item key='todos' value="todos" onClick={()=>{navigate('/products')}}>TODOS</Menu.Item>
                            {categories.map((category)=>
                            (<Menu.Item key={category.slug} value={category.slug} onClick={()=>{navigate(`/category/${category.slug}`)}}>{category.name.toUpperCase()}</Menu.Item>))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
            <Text onClick={()=>{navigate('/')}} cursor='pointer'>CAMPO CRUDO</Text>
            <CartWidget></CartWidget>
        </Flex>
        
    )
}
export default NavBar