import React, { useEffect, useState } from 'react';
import { Grid, Spinner, Center, Box, WrapItem } from '@chakra-ui/react';
import Card from './Components/Administrator/Card';
import axios from "axios"
import Header from './Components/Administrator/HeaderAdmin';
import ScreenAdmin from './Components/Administrator/ScreenAdmin'
import ScreenColab from './Components/Collaborator/SreenColab'
import ScreenDescription from './Components/Collaborator/SreenDescription';
import TextArea from './Components/Collaborator/TextArea'


function App() {

 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const editCard = () => {
    console.log('teste')
    return <ScreenAdmin/>
    
  }

const renderCard = () => {
  return (
      <><Header />
      <Grid templateColumns="repeat(8, 1fr)" gap={3} p={3}>
      {data.map(data => {
        return <Card roomNumber={data.number} roomStatus={data.roomStatus} editCard={editCard}/>;
      })}
    </Grid></>
  );
}

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
      //renderCard()
      //<ScreenAdmin roomNumber={data[0].number} roomStatus={data[0].roomStatus} />
      // <ScreenColab roomNumber={data[0].number}roomStatus={data[0].roomStatus} employee={data[0].employees.name}
      //<ScreenDescription roomNumber={data[0].number} roomStatus={data[0].roomStatus} />
      <TextArea/>
      );
}
        


}

export default App;
