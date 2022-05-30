import React, { useEffect, useState } from 'react';
import { Spinner} from '@chakra-ui/react';
import axios from 'axios';

import {
  Box,
  Flex,
  Text,
  Tag,
  TagLabel,
  TagLeftIcon,
  Heading,
  VStack,
  Button,
  WrapItem,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function ScreenAdim(props) {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/employee/allEmployees`
        );
        setData(response.data);
          console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

   if(loading){  
    return (
          <Center>
            <Spinner size='lg' color="purple.300" />
          </Center>
  );
  }else if(!loading){

  return (
    <Center>
      <Box
        p="200"
        maxW="600px"
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        margin="30px"
      >
        <VStack spacing={20}>
          <Flex
            HeadingTransform="uppercase"
            fontSize="2xl"
            fontWeight="bold"
            color="purple.500"
            paddingTop={0}
            marginTop="10px"
          >
            UH
            {props.roomNumber}

          </Flex>

          <Text HeadingTransform="uppercase" fontSize="xs" color="purple.500">
            {props.roomStatus}
          </Text>

          <Text
            HeadingTransform="uppercase"
            fontSize="xs"
            color="purple.500"
            width={300}
          >
            ATRIBUIR COLABORADOR 

            <Menu>
              <MenuButton as={Button} minW={0}>
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
               {data.map(data => {
            return ( 
                <MenuItem>{data.name}</MenuItem>
                
            )})}
              </MenuList>
            </Menu>
          </Text>

          <WrapItem>
            <Button colorScheme="purple" variant="outline" size="xs">
              OK
            </Button>
          </WrapItem>
        </VStack>
      </Box>
    </Center>
  );
}
}
