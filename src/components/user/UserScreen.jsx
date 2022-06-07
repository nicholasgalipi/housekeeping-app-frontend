import React, { useEffect, useState } from 'react';
import { Grid, Spinner , Center, Box} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import UserScreenBtn from './UserScreenBtn';
import HeaderUser from './HeaderUser';
import NameBox from './NameBox';

function UserScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { employeeID } = useParams();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/employee/${employeeID}`
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
        <> 
          <HeaderUser />
          <NameBox userName={data.name} />
          {data.roomsAssignedNumber.map((room) => { return <UserScreenBtn roomNumber={room} data={data}/>})}

        </>
  );}
}

export default UserScreen