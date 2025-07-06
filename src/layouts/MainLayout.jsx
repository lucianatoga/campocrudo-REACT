import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import { Box, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router"
import './MainLayout.css'

const MainLayout=()=>{
    return(
        <Box>
            <NavBar/>
            <Flex className="main">
                <Outlet/>
            </Flex>
            <Footer/>
        </Box>
    )
}

export default MainLayout;