import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { Box, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router"

const MainLayout=()=>{
    return(
        <Box>
            <NavBar/>
            <Flex direction='column' alignItems='center' justifyContent='center' padding='1.5rem 0' minHeight='80vh'>
                <Outlet/>
            </Flex>
            <Footer/>
        </Box>
    )
}

export default MainLayout;