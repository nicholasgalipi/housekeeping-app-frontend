import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import HeaderColab from './HeaderColab.js';
import { Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react'
import {
  Text,
  Center,
  Box,
  VStack,
  Heading,
  WrapItem,
  Button,
  Grid,
} from '@chakra-ui/react';
import TextArea from './TextArea.js';



export default function ScreenDescription(props) {  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [click, setClick] = useState(true);

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
  
  if (!click) {
      return (
          <TextArea/>
      )
  }
  if (loading) {
    return (
      <Center>
        <Spinner size="lg" color="purple.300" />
      </Center>
    );
  } else if (!loading)  {
    return (
      <>
        <HeaderColab />
        <Center>
          <VStack spacing={20}>
            <Grid
              h="650px"
              w="600px"
              templateColumns="1fr"
              gap={5}
              HeadingTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="purple.500"
              paddingTop={0}
              marginTop="30px"
              boxShadow={'2xl'}
              rounded={'md'}
              textAlign="center"
            >
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
                marginBottom={10}
              ></Text>
              <Center>
                <Stack spacing={[1, 5]} direction={['column']}>
                  <Checkbox size="lg">Limpeza Geral do Quarto</Checkbox>
                  <Checkbox size="lg" defaultChecked>
                    Limpeza Banheiro
                  </Checkbox>
                  <Checkbox size="lg" defaultChecked>
                    Arrumação de Camas
                  </Checkbox>
                </Stack>
              </Center>
              <WrapItem>
                <Button
                  onClick={setClick}
                  colorScheme="purple"
                  variant="outline"
                  size="xs"
                  margin="220px"
                  marginTop={10}
                  w="200px"
                  h={10}
                >
                  RELATAR OCORRENCIA
                </Button>
              </WrapItem>
              <Button
                onClick={setClick}
                colorScheme="purple"
                variant="outline"
                size="xs"
                margin="220px"
                marginTop={-220}
                marginBottom={0}
                w="200px"
                h={10}
              >
                SOLICITAR MANUTENÇÃO
              </Button>
              <Button
                onClick={setClick}
                colorScheme="purple"
                variant="outline"
                background="gray.200"
                size="xs"
                margin="270px"
                marginTop={-180}
                w="100px"
                h={10}
              >
                FINALIZAR
              </Button>
              <Button
                onClick={setClick}
                colorScheme="purple"
                variant="outline"
                background="red.200"
                size="xs"
                margin="270px"
                marginTop={-270}
                w="100px"
                h={10}
              >
                CANCELAR
              </Button>
            </Grid>
          </VStack>
        </Center>
      </>
    );
  }
}
    
    
    

