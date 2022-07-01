import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
} from '@chakra-ui/react';
import { SettingsIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


export default function HeaderAdmin() {
  

  return (
    <>
      <Box bg={'purple.200'} p={2} boxShadow={'md'} >
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
         

         
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




          <Box pr={3}>
            <Menu color='purple'>
              <MenuButton >
                <SettingsIcon color='purple.600' />
              </MenuButton>
              <MenuList color='purple' >
                
                <Link to={'/admin/edit_employee'}>
                  <MenuItem>Create/remove employee</MenuItem>
                </Link>
                
                <Link to={'/admin/dashboard'}>
                  <MenuItem>Employee dashboard</MenuItem>
                </Link>
                
                <MenuDivider />
                <Link to={'/'}><MenuItem>Log out</MenuItem> </Link>
              </MenuList>
            </Menu>
          </Box>

        </Flex>

       
      </Box>

     
    </>
  );
}