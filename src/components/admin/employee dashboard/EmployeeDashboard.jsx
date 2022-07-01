import { Center,Spinner,Box } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from "axios"

function EmployeeDashboard() {
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
            setError(null);
            console.log(data)
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
      );}

    if(!loading){
       return(
        <Center>
            <Box
                mt="200px"
                pt={10} 
                minH="280"
                boxShadow={'md'}
                rounded={'md'}>
                <TableContainer>
                    <Table variant='striped' colorScheme='purple'>
                        <TableCaption>All employees</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Employee name</Th>
                                <Th>Rooms Assigned</Th>
                            </Tr>
                        </Thead>


                        <Tbody>
                        {data.map((data) =>{
                            return(<Tr>
                                <Th>{data.name}</Th>
                                <Th>{data.roomsAssigned.length}</Th>
                            </Tr> )
                        })}
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </Center>
    )
        
        


    }

}

export default EmployeeDashboard