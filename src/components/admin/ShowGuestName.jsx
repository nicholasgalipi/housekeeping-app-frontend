import React from 'react'
import { Text } from '@chakra-ui/react'

function ShowGuestName({guestName}) {
  if(guestName)
    return (
        <Text
        HeadingTransform="uppercase"
       fontSize='md'
       color="purple.500"
       >
      Guest name: {guestName}
        </Text>
  )
}

export default ShowGuestName