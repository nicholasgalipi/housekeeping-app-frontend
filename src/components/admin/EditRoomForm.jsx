import { useState } from 'react'
import { Stack,WrapItem, Button,Text,Input,useToast  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import EmployeePicker from './EmployeePicker'

function EditRoomForm({status, roomData}) {
  const [guestName,setGuestName] = useState('')
  const [employee,setEmployee] = useState('')
  let navigate = useNavigate();
  const toast = useToast()
  const employeeHandler = (emp ) => {
    setEmployee(emp)
  }
console.log(roomData)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let roomStatus = ''
        let obs = ''
        let assigned = false
        let assignedTo = ''
        
        if(status === 'Occupied'){
            roomStatus = 'Occupied'
        }
        else if(status === 'Assigned for cleaning'){
            roomStatus = 'Assigned for cleaning'
            assigned = true
            assignedTo = employee
        }
        else if(status === 'Ready for guest'){
            roomStatus = 'Ready for guest'
        }
        else if(status === 'Waiting cleaning'){
            roomStatus = 'Waiting cleaning'
        }

        try{
            await axios.put(`http://localhost:3001/rooms/${roomData._id}/updateRoom?&nameOfGuest=${guestName}&roomStatus=${roomStatus}&obs=${obs}&assigned=${assigned}&assignedTo=${assignedTo}`);
            toast({
                title: 'Succes.',
                description: `Changed room ${roomData.number} status to ${status}`,
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
    
  if(status === 'Occupied'){
    return (
            <form onSubmit={handleSubmit}>

                <Stack   direction={'row'} spacing={2}>
                    <Text
                    noOfLines={1}
                    width={40}
                    mt={0.5}
                    HeadingTransform="uppercase"
                    fontSize="lg"
                    color="purple.500"
                    >
                        Guest name:
                    </Text>
                    <Input onChange={(e) => {setGuestName(e.target.value)}} placeholder='Name' size='sm' borderColor='purple.300'/>
                </Stack>



                <Stack mt={8} direction={'row'} spacing={10} justifyContent='center'>
                    <Link to={'/admin'}>
                        <WrapItem>
                            <Button colorScheme='purple' variant='outline' size='lg'>Cancel</Button>
                        </WrapItem>
                    </Link>

                    <WrapItem>
                                <Button type="submit" colorScheme='purple' variant='solid' size='lg'>Submit</Button>
                    </WrapItem>
                </Stack>
            </form>
            )
  }

  if(status === 'Assigned for cleaning'){
    return (
            <form onSubmit={handleSubmit}>

                <Stack   direction={'row'} spacing={2}>
                    <Text
                    noOfLines={1}
                    width={40}
                    mt={0.5}
                    HeadingTransform="uppercase"
                    fontSize="lg"
                    color="purple.500"
                    >
                        Assign to:
                    </Text>
                    <EmployeePicker employeeHandler={employeeHandler}/>
                </Stack>



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
            )
  }

  if(status === 'Ready for guest'){
    return (
            <form onSubmit={handleSubmit}>

               
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
            )
  }

  if(status === 'Waiting cleaning'){
    return (
            <form onSubmit={handleSubmit}>

               
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
            )
  }
 return (
        
    
    <Stack mt={8} direction={'row'} spacing={4}>
        <Link to={'/admin'}>
            <WrapItem>
                 <Button colorScheme='purple' variant='outline' size='md'>Cancel</Button>
            </WrapItem>
        </Link>
    </Stack>
    
            )
}

export default EditRoomForm