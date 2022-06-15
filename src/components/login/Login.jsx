import { Box, Center,Heading,HStack,VStack,Text,Stack,Button,WrapItem,Radio,RadioGroup,useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EmployeePicker from './EmployeePicker';
import SubmitBtn from './SubmitBtn';

function Login() {
    let navigate = useNavigate();
    const toast = useToast()
    const [selected, setSelected] = useState('admin');
    const [employeeID, setEmployeeID] = useState(null);
    const [canSubmit, setCanSubmit] = useState(true);
    
    
    const employeeHandler = (employee) => {
        setEmployeeID(employee)
    }

    const submit = () =>{
        if (selected === 'admin'){
            navigate("/admin", { replace: true });
        }else if (selected === 'user' && employeeID !== null){
            navigate(`/user/${employeeID}`, { replace: true });
        }else if (selected === 'user' && employeeID === null){
            toast({
                title: 'Error.',
                description: "Please select an user",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
              })
        }

    }

    

   

    return (
    <Center>
        <Box
        // p="5" 
        // maxW="500px" 
        minH="400px"
        minW="300px"  
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        mt='15%'
        >
             <Box bg={'purple.200'} p={2} boxShadow={'md'} rounded={'md'}>
                <HStack pl={3}>
                    <Heading
                    HeadingTransform="uppercase"
                    fontSize="3xl"
                    fontWeight="bold"
                    color="purple.500"
                    >
                    Lavender    
                    </Heading>

                    <Heading
                    HeadingTransform="uppercase"
                    fontSize="md"
                    fontWeight="italic"
                    color="white"
                    pt={3}
                    >
                    housekeeping
                    </Heading>
                </HStack>
            </Box>

            <VStack   spacing={6} justifyContent='center'>
                    <Text
                    noOfLines={1}
                    mt={8}
                    HeadingTransform="uppercase"
                    fontSize="2xl"
                    color="purple.500"
                    >
                        Login as:
                    </Text>

                    <RadioGroup defaultValue='admin' onChange={(e) => setSelected(e)}>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='purple' value='admin'>
                            Admin
                            </Radio>
                            <Radio colorScheme='purple' value='user'>
                            User
                            </Radio>
                        </Stack>
                    </RadioGroup>

                    <EmployeePicker selected={selected} employeeHandler={employeeHandler} setCanSubmit={setCanSubmit} />


                    <Stack mt='20' direction={'row'} spacing={10} justifyContent='center'>
                            <SubmitBtn submit={submit} canSubmit={canSubmit}/>
                            
                     </Stack>
                    
            </VStack>





         </Box>

    </Center>
    
  )
}

export default Login