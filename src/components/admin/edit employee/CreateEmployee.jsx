import { VStack,Text,Input, Center } from "@chakra-ui/react"

function CreateEmployee({option, employeeName}) {
  
  if (option === 'create'){

      return (
        <Center>
            <VStack  spacing={5} >
                    <Text
                    fontWeight="bold"
                    mt={0.5}
                    HeadingTransform="uppercase"
                    fontSize="xl"
                    color="purple.500"
                    >
                        Name
                    </Text>
                    <Input onChange={(e) => {employeeName(e.target.value)}} placeholder='Name' size='lg' borderColor='purple.300'/>
        </VStack>
        </Center>
      )


  }
}

export default CreateEmployee