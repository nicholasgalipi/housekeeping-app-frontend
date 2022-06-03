import { useState } from 'react'
import { Stack,WrapItem, Button,Text,Input,Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import EmployeePicker from './EmployeePicker'

function EditRoomForm({status, roomData}) {
  const [guestName,setGuestName] = useState('')
  const [employee,setEmployee] = useState('')
  let navigate = useNavigate();
  const employeeHandler = (emp ) => {
    setEmployee(emp)
  }
    const handleSubmitOccupied = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/rooms/${roomData._id}/updateRoom?&nameOfGuest=${guestName}&roomStatus=Occupied&obs=&assigned=false&assignedTo=`);
        navigate("/admin", { replace: true });
    }
    const handleSubmitReady= async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/rooms/${roomData._id}/updateRoom?&nameOfGuest=&roomStatus=Ready for guest&obs=&assigned=false&assignedTo=`);
        navigate("/admin", { replace: true });
    }
    const handleSubmitAssignedCleaning = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/rooms/${roomData._id}/updateRoom?&nameOfGuest=&roomStatus=Assigned for cleaning&obs=&assigned=true&assignedTo=${employee}`);
        navigate("/admin", { replace: true });
    }
    const handleSubmitWaitingCLeaning = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/rooms/${roomData._id}/updateRoom?&nameOfGuest=&roomStatus=Waiting cleaning&obs=&assigned=false&assignedTo=`);
        navigate("/admin", { replace: true });
    }
    
  if(status === 'Occupied'){
    return (
            <form onSubmit={handleSubmitOccupied}>

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
            <form onSubmit={handleSubmitAssignedCleaning}>

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
            <form onSubmit={handleSubmitReady}>

               
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
            <form onSubmit={handleSubmitWaitingCLeaning}>

               
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