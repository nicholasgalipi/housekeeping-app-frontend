import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Center
} from '@chakra-ui/react';
import { SettingsIcon} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function HeaderUser() {
  const { isOpen } = useDisclosure();

  return (
    <>
      <Box bg={'purple.200'} p={2} boxShadow={'md'} >
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
          {/* <HStack spacing={8} alignItems={'center'}>
            <Box color={'blackAlpha.800'}><strong>N&R</strong></Box>
          </HStack> */}

         
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
            <Menu>
              <MenuButton >
                <SettingsIcon color='purple.600' />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Box>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={50} display='block' textAlign={'center'} fontSize='30px' color={'blue.600'}>
        <strong>Painel Administrador</strong>
      </Box> */}
    
    </>

  );
}