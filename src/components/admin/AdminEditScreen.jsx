
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Grid, Spinner , Center, Flex, Text, useColorModeValue,Tag,TagLabel,TagLeftIcon, Heading, VStack, Button, WrapItem,Box, Stack,Select} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function AdminEditScreen() {
    let { roomID } = useParams()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
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
            
            <VStack paddingTop={"10%"}>
                <Box
                    p="5" 
                    minW="400px" 
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    >
                    <VStack spacing={4}>
                        <Heading
                        HeadingTransform="uppercase"
                        fontSize="lg"
                        fontWeight="bold"
                        color="purple.500"
                        >
                        UH {data.number}
                        </Heading>

                        <Text
                            HeadingTransform="uppercase"
                            fontSize="xs"
                            color="purple.500"
                            >
                            Current status is {data.roomStatus}
                        </Text>
                        
                        <Stack  direction={'row'} spacing={2}>
                            <Text
                            mt={0.5}
                                HeadingTransform="uppercase"
                                fontSize="sm"
                                color="purple.500"
                                >
                                Status:
                            </Text>

                            <Select placeholder='' size='xs' borderColor='purple.300' >
                                <option value='option1'>Occupied</option>
                                <option value='option2'>Ready for guest</option>
                                <option value='option3'>Waiting cleaning</option>
                            </Select>
                        </Stack>
                        
                        <Stack mt={8} direction={'row'} spacing={4}>
                            

                            <Link to={'/admin'}>
                                <WrapItem>
                                <Button colorScheme='purple' variant='outline' size='xs'>Cancel</Button>
                                </WrapItem>
                            </Link>

                            <WrapItem>
                                <Button colorScheme='purple' variant='solid' size='xs'>Submit</Button>
                            </WrapItem>
                        </Stack>

                    </VStack>
                        
                        
                        
                </Box>
            </VStack>
        </>
    )}
}

export default AdminEditScreen