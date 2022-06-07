import React from 'react'
import { Box, Text,Center } from '@chakra-ui/react'
function NameBox( {userName}) {
  return (
    <Box bg='white' w='100%' p={2} color='Black' boxShadow={'md'} borderBottomWidth='1px' bg={'purple.200'}>
    <Center>

      <Text
                    HeadingTransform="uppercase"
                    fontSize='lg'
                    color="purple.500"
                    >
                 Hello, {userName}.
      </Text>
    </Center>
    
</Box>
  )
}

export default NameBox