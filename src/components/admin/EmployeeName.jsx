
import { Text,Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from "axios"

function EmployeeName({employeeID}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
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
  
  
   
        
        if(!loading){
            return (
                <Text
                         HeadingTransform="uppercase"
                        fontSize='md'
                        color="purple.500"
                        >
                       Room assigned to {data.name}
                 </Text>
              )
        } 
        if(loading){
            <Skeleton height='20px' />
        }  
       
    }


export default EmployeeName