import { Box, Text, HStack, Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

function UserScreenBtn({data, roomNumber}) {
  console.log(data)

  return (
    <Box bg='white' w='100%' p={4} color='Black' boxShadow={'md'} borderWidth='1px'>
        
        <HStack  pl={2}  pr={2} justifyContent='space-between'>
          <Text
                        
              HeadingTransform="uppercase"
              fontSize='lg'
              color="purple.500"
              >
            UH {roomNumber}
          </Text>
          <Link to={`edit/${roomNumber}`}>
            <Button colorScheme='purple' variant='outline' size='md'>View</Button>
          </Link>

        </HStack>
        
    </Box>
  )
}

export default UserScreenBtn