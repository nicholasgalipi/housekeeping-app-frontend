import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import Header from './HeaderAdmin';
import { Grid, GridItem } from '@chakra-ui/react';

import {
  Box,
  Flex,
  Text,
  VStack,
  Button,
  WrapItem,
  Center,
 
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';

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

  if (loading) {
    return (
      <Center>
        <Spinner size="lg" color="purple.300" />
      </Center>
    );
  } else if (!loading) {
    return (
      <>
        <Header />

        <Center>
          {/* <Box */}
          {/* p="200"
    maxW="600px"
    bg={'white'}
    boxShadow={'2xl'}
    rounded={'md'}
    margin="30px"
  > */}
          <VStack spacing={20}>
            {/* <Flex */}
            <Grid
              h="500px"
              w="500px"
              // templateRows="repeat(2, 1fr)"
              templateColumns="1fr"
              gap={4}
              HeadingTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="purple.500"
              paddingTop={0}
              marginTop="50px"
              boxShadow={'2xl'}
              rounded={'md'}
              textAlign="center"
            >
              {/* > */}
              UH
              {props.roomNumber}
              
              <Text
                HeadingTransform="uppercase"
                fontSize="xs"
                color="purple.500"
              ></Text>
              {props.roomStatus}
              <Text
                HeadingTransform="uppercase"
                fontSize="xs"
                color="purple.500"
              >
                <Select
                  placeholder="ATRIBUIR COLABORADOR"
                  w={400}
                  margin="50px"
                >
                  {data.map(data => {
                    return <option>{data.name}</option>;
                  })}
                </Select>
              </Text>
              <WrapItem>
                <Button
                  colorScheme="purple"
                  variant="outline"
                  size="xs"
                  margin="220px"
                  marginTop={40}
                >
                  SELECIONAR
                </Button>
              </WrapItem>
            </Grid>
            {/* </Flex> */}
          </VStack>
          {/* </Box> */}
        </Center>
      </>
    );
  }
}
