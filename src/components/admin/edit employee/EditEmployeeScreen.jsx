import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Box, Center,VStack,Text,Stack,Button,WrapItem,Radio,RadioGroup,useToast } from '@chakra-ui/react'
import CreateEmployee from './CreateEmployee'
import RemoveEmployee from './RemoveEmployee'

function EditEmployeeScreen() {
    const [option, setOption] = useState('create')
    const [newEmployeeName, setNewEmployeeName] = useState(null)
    const [removeEmployeeID, setRemoveEmployeeID] = useState(null)
    let navigate = useNavigate();
    const toast = useToast()
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(option === 'create'){
            if(newEmployeeName.length <= 5 ){
                toast({
                    title: 'Error',
                    description: `Employee name should be more them 5 letters`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })
            }else{
                try{
                    await axios.post(`http://localhost:3001/employee/newEmployee?name=${newEmployeeName}`)
                    toast({
                        title: 'Succes.',
                        description: `Created new employee ${newEmployeeName} on the database`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                      })
                    navigate("/admin", { replace: true });
                }catch(err){
                    toast({
                        title: 'Error',
                        description: `${err}`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                      })
                }
            }
        }else if(option === 'remove'){
            if ( removeEmployeeID === null){
                toast({
                    title: 'Error',
                    description: `Please select a employee to delete`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })
            }else{
                try{
                    await axios.delete(`http://localhost:3001/employee/deleteEmployee?id=${removeEmployeeID}`)
                    toast({
                        title: 'Succes.',
                        description: `Removed employee from database`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    navigate("/admin", { replace: true });
                }catch (err){
                    toast({
                        title: 'Error',
                        description: `${err}`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                      })
                }
            }
        }
        
       
        
    }

  return (
    <Center>
        <Box
            minH="400px"
            minW="300px"  
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'md'}
            mt='15%'>
                 <VStack   spacing={6} justifyContent='center'>
                    <Text
                    noOfLines={1}
                    mt={8}
                    HeadingTransform="uppercase"
                    fontSize="2xl"
                    color="purple.500"
                    >
                        Edit employee
                    </Text>

                    <RadioGroup defaultValue='create' onChange={(e) => setOption(e)}>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='purple' value='create'>
                            Create
                            </Radio>
                            <Radio colorScheme='purple' value='remove'>
                            Remove
                            </Radio>
                        </Stack>
                    </RadioGroup>


                    <form onSubmit={handleSubmit}>

                    <RemoveEmployee option={option} employeeID={setRemoveEmployeeID}/>
                    <CreateEmployee option={option} employeeName={setNewEmployeeName}/>
               
                        <Stack mt={8} direction={'row'} spacing={10} justifyContent='center'>
                            <Link to={'/admin'}>
                                <WrapItem>
                                    <Button colorScheme='purple' variant='outline' size='lg'>Cancel</Button>
                                </WrapItem>
                            </Link>

                            <WrapItem>
                                        <Button type="submit"  colorScheme='purple' variant='solid' size='lg'>Submit</Button>
                            </WrapItem>
                        </Stack>
                    </form>
                    
                    
                </VStack>


        </Box>

    </Center>
  )
}

export default EditEmployeeScreen