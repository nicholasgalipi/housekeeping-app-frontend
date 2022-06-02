import * as React from "react";
import { Box, Flex, Text, useColorModeValue,Tag,TagLabel,TagLeftIcon, Heading, VStack, Button, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
   
      <Box 
        p="5" 
        maxW="200px" 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
       
      >

        <VStack spacing={4}>
        <Heading
            HeadingTransform="uppercase"
            fontSize="2xl"
            fontWeight="bold"
            color="purple.500"
          >
          UH {props.roomNumber}
          </Heading>

          <Text
            HeadingTransform="uppercase"
            fontSize="xs"
            color="purple.500"
          >
          {props.roomStatus}
          </Text>
         
          

          <Link to={props.roomID}>
            <WrapItem>
              <Button colorScheme='purple' variant='outline' size='xs'>View</Button>
            </WrapItem>
          </Link>
          

        </VStack>
        
        {/* <Flex justify={'center'} align="center" mt={2}>
        
        </Flex> */}
      </Box>
   
  );
}