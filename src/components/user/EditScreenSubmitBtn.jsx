import React from 'react'
import { Button,WrapItem } from '@chakra-ui/react'

function EditScreenSubmitBtn( {isActive}) {
  if(isActive){
      return(
        <WrapItem>
            <Button type="submit"  colorScheme='purple' variant='solid' size='lg'>Submit</Button>
        </WrapItem>
      )
}
  if(!isActive){
    return(
        <WrapItem>
            <Button type="submit"  colorScheme='purple' variant='solid' size='lg' isDisabled={true}>Submit</Button>
        </WrapItem>
    )
}
}

export default EditScreenSubmitBtn