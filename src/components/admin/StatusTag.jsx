import React from 'react'
import { Text,Tag } from '@chakra-ui/react'

function StatusTag({status}) {
 
    
    if(status === "Waiting cleaning"){
        return (
            <Tag colorScheme='red' variant='subtle'  size='md'>{status}</Tag>
            
        )
    }

    if(status === "Occupied"){
        return (
            <Tag colorScheme='purple' variant='subtle'  size='md'>{status}</Tag>
        )
    }

    if(status === "Ready for guest"){
        return (
            <Tag colorScheme='green' variant='subtle'  size='md'>{status}</Tag>
        )
    }

    if(status === "Assigned for cleaning"){
        return (
            <Tag colorScheme='yellow' variant='subtle'  size='md'>{status}</Tag>
        )
    }
  
}

export default StatusTag