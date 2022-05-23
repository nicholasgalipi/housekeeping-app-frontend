import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Card from './Card';
import axios from "axios"

function App() {

 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/rooms/allRooms`
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

 console.log(data)
  return (
    <ChakraProvider>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         
      </Grid>
    </ChakraProvider>
  

  
  );
}

export default App;
