import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import HeaderColab from './HeaderColab.js';
import {Text, Center} from '@chakra-ui/react';

export default function ScreenColab(props) {
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
        <HeaderColab />
        <Center>
          <Text
            display="block"
            textAlign={'center'}
            fontSize="30px"
            color={'blue.600'}
          >
            Lista de quartos atribuidos para ...{props.name}
          </Text>
        </Center>
        
      </>
      
    );
//   } if ({name}) {
        
//         <Card />
}}
