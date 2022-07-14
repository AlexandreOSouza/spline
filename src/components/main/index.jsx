import { Box, HStack, VStack, Text, Button } from "@chakra-ui/react";
import AnimationContent from "../animationContent";

const Main = () => {
    return (
        <HStack>
            <HStack paddingLeft={'45px'} paddingTop={'50px'}>
                <VStack>
                    <Box 
                        width={'1px'}
                        height={'500px'}
                        background={'linear-gradient( 180deg, #08b6f9 0%, #6c56ef 33.57%, #1306dd 65.86%, #aa0eb2 100% )'}
                    >    
                    </Box>
                </VStack>
                <VStack paddingLeft={10} paddingY={'15px'} alignItems={'flex-start'} height={'500px'} justifyContent={'space-between'}>
                    <Text fontSize={'6xl'} color={'white'} fontWeight={'bold'} maxW={'500px'}>
                        Collaborate with people
                    </Text>
                    <Text fontSize={'sm'} color={'white'} maxW={'350px'}>
                        Bring your team together and build your community by using our cross-platform app that 
                        lets you collaborate via chat, voice and by sharing and storing unlimited media files. 
                        A world of topics is waiting for you. Join the private beta.
                    </Text>
                    <Button bgColor={'#0D1027'} border={'1px solid #CFCFD2'} color={'white'} paddingX={'30px'} borderRadius={'15px'} _hover={{ bgColor: '#0D1027'}}>
                        Download for Mac
                    </Button>
                </VStack>
            </HStack>
            <AnimationContent />
        </HStack>
    )
}

export default Main;
