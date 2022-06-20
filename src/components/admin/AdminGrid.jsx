import { Grid, Spinner , Center, Box} from '@chakra-ui/react'
import Card from './Card'


function AdminGrid({data, filter}) {
    let newData = data
    
    if (filter !== "None") { 
        newData = data.filter((data) => { return data.roomStatus === filter})
    }
    
    if (filter === "None") { 
      newData = data
  }
  
    return (
    <Grid templateColumns='repeat(8, 1fr)' gap={3} p={3}>
            {newData.map((newData) => { return <Card roomNumber={newData.number} roomStatus={newData.roomStatus} roomID={newData._id} guestName={newData.nameOfGuest}/>  } )}
    </Grid>
  )
}

export default AdminGrid