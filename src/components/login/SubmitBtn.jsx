import React from 'react'
import { Button } from '@chakra-ui/react'


function SubmitBtn({submit, canSubmit}) {
  if (canSubmit) {
    return (
      <Button onClick={submit} colorScheme='purple' variant='solid' size='lg'>Submit</Button>
  )}else if (!canSubmit) {
    return (
      <Button isDisabled={true} colorScheme='purple' variant='solid' size='lg'>Submit</Button>
  )}
}

export default SubmitBtn