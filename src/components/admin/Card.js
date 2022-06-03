import * as React from "react";
import { Box, useColorModeValue, Heading, VStack, Button, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import StatusTag from "./StatusTag";
export default function Card(props) {
  return (
   
      <Box 
        p="5"
        pt={10} 
        maxW="500px" 
        minH="280"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'md'}
        rounded={'md'}
       
      >

        <VStack spacing={10}>
        <Heading
            HeadingTransform="uppercase"
            fontSize="4xl"
            fontWeight="bold"
            color="purple.400"
          >
          UH {props.roomNumber}
          </Heading>

          

          <StatusTag status={props.roomStatus}/>

          {/* if(props.guestName){
            <Text
            HeadingTransform="uppercase"
            fontSize="md"
            color="purple.500"
          >
          {props.guestName}
          </Text> 
          } */}
          
         
         
          
          

          <Link to={props.roomID}>
            <WrapItem>
              <Button colorScheme='purple' variant='outline' size='lg'>View</Button>
            </WrapItem>
          </Link>
          

        </VStack>

        
        
        {/* <Flex justify={'center'} align="center" mt={2}>
        
        </Flex> */}
      </Box>
   
  );
}