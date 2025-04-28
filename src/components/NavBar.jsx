import { Button, Menu, Portal, Flex, Text } from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io";
import CartWidget from "./CartWidget"

const headerStyle={
    justifyContent:'space-between', 
    alignItems: 'center',
    border:'1px solid #DCDCDC',
    padding: '1rem 2rem',
    backgroundColor:'linen'
}

const NavBar = () => {
    return(
        <Flex style={headerStyle}>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" size="md">catálogo <IoMdMenu /></Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value="Categoria1">AROS</Menu.Item>
                            <Menu.Item value="Categoria2">CARTERAS</Menu.Item>
                            <Menu.Item value="Categoria3">CINTOS</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
            <Text>CAMPO CRUDO</Text>
            <CartWidget></CartWidget>
        </Flex>
        
    )
}
export default NavBar