import { Box, Flex, Button,Menu, MenuButton, MenuItem,MenuList} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

function AdminFilterBtn({setFilter}) {
  return (
   <Box p={3}>
        <Flex justify={'right'} >
           

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon  />} colorScheme='purple' variant='ghost' size='lg'>
                   Filter
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setFilter('Ready for guest')}>Ready for guest</MenuItem>
                    <MenuItem onClick={() => setFilter('Occupied')}>Occupied</MenuItem>
                    <MenuItem onClick={() => setFilter('Waiting cleaning')}>Waiting cleaning</MenuItem>
                    <MenuItem onClick={() => setFilter('Assigned for cleaning')}>Assigned for cleaning</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
   </Box>
  )
}

export default AdminFilterBtn