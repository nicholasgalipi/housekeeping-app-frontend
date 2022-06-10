
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Spinner , Center, Text, Heading, VStack,Box, Stack,Select} from '@chakra-ui/react'
import HeaderAdmin from './HeaderAdmin';
import StatusTag from './StatusTag';
import EditRoomForm from './EditRoomForm';
import ShowGuestName from './ShowGuestName';

function AdminEditScreen() {
    let { roomID } = useParams()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newRoomStatus,setNewRoomStatus] = useState("test");


    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(
            `http://localhost:3001/rooms/${roomID}`
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
            <VStack paddingTop={"10%"}>
                <Box
                    p="5" 
                    minW="400px" 
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    >
                    <VStack spacing={3}>
                        <Heading
                        HeadingTransform="uppercase"
                        fontSize="6xl"
                        fontWeight="bold"
                        color="purple.500"
                        pt={8}
                        >
                        UH {data.number}
                        </Heading>

                        <Text
                        
                            HeadingTransform="uppercase"
                            fontSize='md'
                            color="purple.500"
                            >
                            Current status is <StatusTag status={data.roomStatus}/>
                        </Text>

                        <ShowGuestName guestName={data.nameOfGuest}/>
                                          
                        <Stack  direction={'row'} spacing={2} pt={10} pb={4}>
                            <Select 
                                onChange={(e) => {setNewRoomStatus(e.target.value)}} 
                                placeholder='Select new status' 
                                size='md' 
                                borderColor='purple.500'                               
                                >
                                <option value='Occupied'>Occupied</option>
                                <option value='Ready for guest'>Ready for guest</option>
                                <option value='Waiting cleaning'>Waiting cleaning</option>
                                <option value='Assigned for cleaning'>Assigned cleaning</option>
                            </Select>
                        </Stack>
                        
                        <EditRoomForm status={newRoomStatus} roomData={data} />

                    </VStack>
                                           
                        
                </Box>
            </VStack>
        </>
    )}
}

export default AdminEditScreen