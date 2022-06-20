import { Box, Flex, Text, Select,HStack} from "@chakra-ui/react"

function AdminFilterBtn({setFilter}) {
  return (
        <Flex justify={'right'} >
            <Box p={5}  w='250px'>
                <Select
                        onChange={(e) => {setFilter(e.target.value)}} 
                        size='md' 
                        borderColor='purple.500'
                        placeholder="Select a filter"
                        >
                            <option value='None'>None</option>
                            <option value='Ready for guest'>Ready for guest</option>
                            <option value='Occupied'>Occupied</option>
                            <option value='Waiting cleaning'>Waiting cleaning</option>
                            <option value='Assigned for cleaning'>Assigned for cleaning</option>
                </Select>
            </Box>
        </Flex>
  )
}

export default AdminFilterBtn