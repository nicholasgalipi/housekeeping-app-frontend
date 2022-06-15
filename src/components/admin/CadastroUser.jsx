import { useState, useEffect } from 'react';
import {Flex, VStack, Button, WrapItem, Heading, Stack,} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form() {
  let navigate = useNavigate();

  async function cadastrarUsuario(e) {
    e.preventDefault();
    console.log('Chamou');
    //post no banco de dados
    const response = await axios.post(
      `http://localhost:3001/employee/newEmployee?name=${name}`
    );
    navigate('/admin', { replace: true });
  }
  const [name, setName] = useState();

  return (
    <VStack spacing={4} paddingTop={20}>
      <Flex
        direction={'column'}
        h="300px"
        w="500px"
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
        <Heading
          HeadingTransform="uppercase"
          fontSize="2xl"
          fontWeight="bold"
          color="purple.500"
          padding={30}
        >
          Cadastro de usuário:
        </Heading>
        <form onSubmit={cadastrarUsuario}>
          <Stack direction={'row'} spacing={2} marginLeft={10}>
            <label htmlFor="name">Nome:</label>
            <input
              size={25}
              type="text"
              id="name"
              name="name"
              placeholder=""
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </Stack>
          <Stack mt={8} direction={'row'} spacing={10} justifyContent="center">
            <WrapItem p={10}>
              <Button
                type="submit"
                colorScheme="purple"
                variant="solid"
                size="lg"
              >
                Submit
              </Button>
            </WrapItem>
          </Stack>
        </form>
      </Flex>
    </VStack>
  );
}
