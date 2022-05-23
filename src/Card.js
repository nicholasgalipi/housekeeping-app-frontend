import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";


export default function Card() {
  return (
   
      <Box p="5" maxW="320px" borderWidth="1px">
        {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" /> */}
        <Flex align="baseline" mt={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="20"
            fontWeight="bold"
            color="purple.300"
          >
           UH 20
          </Text>
       
         
        </Flex>
      </Box>
   
  );
}