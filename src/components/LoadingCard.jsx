import { HStack, Skeleton, SkeletonText, Stack, Card } from "@chakra-ui/react";

const LoadingCard=()=>{
    return(
        <Card.Root  padding='.5rem'>
        <HStack gap="6" width='md' height='sm'>
            <Skeleton height="250px" width='50%'/>
            <Stack width='40%' justifyContent='space-evenly' height="300px">
                <SkeletonText noOfLines={6}/>
                <HStack>
                    <Skeleton height="5" width="30%"/>
                    <Skeleton height="5" width="30%" />
                    </HStack>
            </Stack>
        </HStack> 
        </Card.Root>
    )
}
export default LoadingCard;