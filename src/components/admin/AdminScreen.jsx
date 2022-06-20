import React, { useEffect, useState } from 'react';
import { Spinner , Center} from '@chakra-ui/react'
import axios from "axios"
import HeaderAdmin from './HeaderAdmin';
import AdminFilterBtn from './AdminFilterBtn';
import AdminGrid from './AdminGrid';

function AdminScreen() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("None");
  console.log(filter)

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
        <> 
          <HeaderAdmin />
          <AdminFilterBtn setFilter={setFilter}/>
          <AdminGrid data={data} filter={filter}/>
        </>
  );}
}

export default AdminScreen