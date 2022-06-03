import React, { useEffect, useState } from 'react';
import { Flex, Spinner, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import HeaderColab from './HeaderColab.js';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import TextArea from './TextArea.js';
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

export default function ScreenDescription(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);

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
        <HeaderColab />
        <Center>
          <VStack spacing={20}>
            <Flex
              direction={'column'}
              h="650px"
              w="600px"
              templateColumns="1fr"
              gap={4}
              HeadingTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="purple.500"
              //   paddingTop={0}
              //   marginTop="30px"
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
                  <Checkbox size="lg">Limpeza Banheiro</Checkbox>
                  <Checkbox size="lg">Arrumação de Camas</Checkbox>
                </Stack>
              </Center>
         
              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Button
                      onClick={setClick}
                      colorScheme="purple"
                      variant="outline"
                      size="xs"
                    >
                      RELATAR OCORRENCIA
                    </Button>
                  </Center>
                </WrapItem>
              </Wrap>

              <TextArea click={click} />

              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Button
                      onClick={setClick}
                      colorScheme="purple"
                      variant="outline"
                      size="xs"
                    >
                      SOLICITAR MANUTENÇÃO
                    </Button>
                  </Center>
                </WrapItem>
              </Wrap>

              <TextArea click={click} />
              
              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Button
                      onClick={setClick}
                      colorScheme="purple"
                      variant="outline"
                      background="gray.200"
                      size="xs"
                    >
                      FINALIZAR
                    </Button>
                  </Center>
                </WrapItem>
              </Wrap>
              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Button
                      onClick={setClick}
                      colorScheme="purple"
                      variant="outline"
                      background="red.200"
                      size="xs"
                    >
                      CANCELAR
                    </Button>
                  </Center>
                </WrapItem>
              </Wrap>
            </Flex>
          </VStack>
        </Center>
      </>
    );
  }
}
