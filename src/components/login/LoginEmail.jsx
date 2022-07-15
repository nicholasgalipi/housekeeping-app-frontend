import {
  Box,
  Center,
  Heading,
  HStack,
  VStack,
  Text,
  Stack,
  Button,
  WrapItem,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmployeePicker from './EmployeePicker';
import SubmitBtn from './SubmitBtn';
import ScreenLogin from './ScreenLogin';

function Login() {
  let navigate = useNavigate();
  const toast = useToast();
  const [selected, setSelected] = useState('admin');
  const [employeeID, setEmployeeID] = useState(null);
  const [canSubmit, setCanSubmit] = useState(true);

  const employeeHandler = employee => {
    setEmployeeID(employee);
  };

  const submit = () => {
    if (selected === 'admin') {
      navigate('/admin', { replace: true });
    } else if (selected === 'user' && employeeID !== null) {
      navigate(`/user/${employeeID}`, { replace: true });
    } else if (selected === 'user' && employeeID === null) {
      toast({
        title: 'Error.',
        description: 'Please select an user',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };

  return (
    <Center>
      <Box
        // p="5"
        maxH="500px"
        minH="400px"
        minW="400px"
        
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        mt="15%"
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

        <VStack spacing={6} justifyContent="center">
          

         <ScreenLogin />
                  
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
