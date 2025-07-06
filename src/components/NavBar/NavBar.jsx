import { Button, Menu, Portal, Flex, Text } from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io";
import CartWidget from "../CartWidget"
import { useNavigate } from "react-router";
import { useGetFirestoreDocs } from "@/hooks/useGetFirestoreDocs";
import './NavBar.css'


const NavBar = () => {
    const navigate=useNavigate();
    const {items: categories}=useGetFirestoreDocs('categories')
    return(
        <Flex className='header-container'>
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
            <Button variant="outline" size="md" onClick={()=>{navigate('/')}}>CAMPO CRUDO</Button>
            <CartWidget />
        </Flex>
        
    )
}
export default NavBar