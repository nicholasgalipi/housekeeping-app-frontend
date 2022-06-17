import { Grid, Spinner , Center, Box} from '@chakra-ui/react'
import Card from './Card'


function AdminGrid({data, filter}) {
    let newData = data
    if (filter !== null) { 
        newData = data.filter((data) => { return data.roomStatus === filter})
        console.log(newData)
    }
  
  
  
    return (
    <Grid templateColumns='repeat(8, 1fr)' gap={3} p={3}>
            {newData.map((newData) => { return <Card roomNumber={newData.number} roomStatus={newData.roomStatus} roomID={newData._id} guestName={newData.nameOfGuest}/>  } )}
    </Grid>
  )
}

export default AdminGrid