import React, { useEffect, useState } from 'react';
import { Flex, Spinner, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
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
import { Radio, RadioGroup } from '@chakra-ui/react';
import HeaderAdmin from '../admin/HeaderAdmin';
import { Select } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import SelectUser from './SelectUser';

export default function ScreenDescription(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(1);
  let navigate = useNavigate();


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/employee/allEmployees`
        );
        setData(response.data);
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

  function handleClick(e) {
    if (e === 1) {
      setClick(1);
    } else {
      setClick(2);
    }
  }

  function userType() {
      
    if (click == 1) {
     navigate("/admin", { replace: true })
    } else {
     navigate(`/user/629505ac4b09da91f3d8e3dc`, { replace: true });
    }
  }

  if (loading) {
    return (
      <Center>
        <Spinner size="lg" color="purple.300" />
      </Center>
    );
  } else if (!loading) {
    return (
      <>
        <HeaderAdmin />
        <Center padding={20}>
          <VStack spacing={20}>
            <Flex
              direction={'column'}
              h="350px"
              w="400px"
              templateColumns="1fr"
              gap={4}
              HeadingTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="purple.500"
              boxShadow={'2xl'}
              rounded={'md'}
              textAlign="center"
            >
              Escola a opção:
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
                <RadioGroup
                  onChange={e => {
                    handleClick(e);
                  }}
                  defaultValue="1"
                  padding={30}
                >
                  <Stack spacing={4} direction="row">
                    <Radio value="1">Administrador</Radio>
                    <Radio value="2">
                      Colaborador
                      <SelectUser click={click} />
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Center>
              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Button
                      onClick={userType}
                      colorScheme="purple"
                      variant="outline"
                      background="gray.200"
                      size="xs"
                    >
                      SELECIONAR
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
