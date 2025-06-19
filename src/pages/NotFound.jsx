import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const NotFound=()=>{
    const navigate=useNavigate();
    return(
        <Flex direction='column' alignItems='center' gap='.5rem'>
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <Button marginTop='1rem' onClick={()=>navigate('/')}>Volver al inicio</Button>
        </Flex>
    );
};

export default NotFound;
