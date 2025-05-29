import { ProgressCircle } from "@chakra-ui/react";
const LoadingCircle=()=>{
    return(
        <ProgressCircle.Root value={null} size={'lg'}>
            <ProgressCircle.Circle css={{ "--thickness": "4px" }}>
                <ProgressCircle.Track />
                <ProgressCircle.Range strokeLinecap="round"/>
            </ProgressCircle.Circle>
        </ProgressCircle.Root>
    )
}

export default LoadingCircle;