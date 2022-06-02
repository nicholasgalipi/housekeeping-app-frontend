
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Grid, Spinner , Center, Flex, Text, useColorModeValue,Tag,TagLabel,TagLeftIcon, Heading, VStack, Button, WrapItem,Box} from '@chakra-ui/react'
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
            
            <VStack paddingTop={"20%"}>
                <Box
                    p="5" 
                    maxW="200px" 
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    >
                    <VStack spacing={4}>
                        <Heading
                        HeadingTransform="uppercase"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="purple.500"
                        >
                        Edit UH {data.number} status.
                        </Heading>
                        
                        <Link to={'/admin'}>
                            <WrapItem>
                             <Button colorScheme='purple' variant='outline' size='xs'>Cancel</Button>
                            </WrapItem>
                        </Link>

                    </VStack>
                        
                        
                        
                </Box>
            </VStack>
        </>
    )}
}

export default AdminEditScreen