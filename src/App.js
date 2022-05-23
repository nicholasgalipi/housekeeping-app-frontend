import React, { useEffect, useState } from 'react';
import { Grid, Spinner , Center, Box} from '@chakra-ui/react'
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

  if(loading){  
    return (
          <Center>
            <Spinner size='lg' color="purple.300" />
          </Center>
  );
  }else if(!loading){
    return (
          <Grid templateColumns='repeat(8, 1fr)' gap={3} p={3}>
            {data.map((data) => { return <Card roomNumber={data.number} roomStatus={data.roomStatus}/>  } )}
          </Grid>
  );}

}

export default App;
