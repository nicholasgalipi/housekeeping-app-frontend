import React, { useEffect, useState } from 'react';
import { Grid, Spinner , Center, Box, Text,Heading, Checkbox, Stack, Button} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios"
import UserScreenBtn from './UserScreenBtn';
import HeaderUser from './HeaderUser';
import EditScreenSubmitBtn from './EditScreenSubmitBtn';



function UserEditScreen() {
let {employeeID, roomNumber} = useParams()
// http://localhost:3001/rooms/roomByNumber?roomNumber=4
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);

let canSubmit = false

if(check1 && check2 && check3 && check4){ canSubmit = true}
if(!check1 || !check2 || !check3 || !check4){ canSubmit = false}


useEffect(() => {
   const getData = async () => {
     try {
       const response = await axios.get(
         `http://localhost:3001/rooms/roomByNumber?roomNumber=${roomNumber}`
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
   <Center>
      <Spinner size='lg' color="purple.300" />
   </Center>

}
 if(!loading){
   return(
      <>
         <HeaderUser/>
         <Center>
            <Heading
               pt='10%'                   
               HeadingTransform="uppercase"
               fontSize='5xl'
               color="purple.500"
               >
                        UH {data.number}
            </Heading>
            

         </Center>

            <center>
            <Text
               pt='5%'                   
               HeadingTransform="uppercase"
               fontSize='xl'
               color="purple.500"
               >
                        Room cleanliness and organization
            </Text>
            </center>
        
        
          <Stack colorScheme='purple'  spacing={5} direction='column' pl='25%' pt='5%'>
            <Checkbox colorScheme='purple' color='purple.500' onChange={(e) => {setCheck1(e.target.checked)}}>Room cleanliness</Checkbox>
            <Checkbox colorScheme='purple' color='purple.500' onChange={(e) => {setCheck2(e.target.checked)}}>Room organization</Checkbox>
            <Checkbox colorScheme='purple' color='purple.500' onChange={(e) => {setCheck3(e.target.checked)}}>Bathroom cleanliness</Checkbox>
            <Checkbox colorScheme='purple' color='purple.500' onChange={(e) => {setCheck4(e.target.checked)}}>Bathroom Organazition</Checkbox>
         </Stack>

         <Stack mt='20%' direction={'row'} spacing={10} justifyContent='center'>

            <Link to={`/user/${employeeID}`}>
                      <Button colorScheme='purple' variant='outline' size='lg'>Cancel</Button>
            </Link>
              
            <EditScreenSubmitBtn isActive={canSubmit}/>

          </Stack>

      </>
      
      ) 
 }

}

export default UserEditScreen