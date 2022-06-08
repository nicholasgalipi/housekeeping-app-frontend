import React from "react";
import { Textarea, Text } from '@chakra-ui/react';

export default function TextArea(props) {
  let [value, setValue] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

    if (!props.click) {
      return 
  }
    if (props.click) {
      return (
        <>
          {/* <Text mb="8px">Value: {value}</Text> */}
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Ocorrência"
            size="xs"
        
          />
        </>
      );
}
  // if (!props.clickM) {
  //   return;
  // }
  // if (props.clickM) {
  //   return (
  //     <>
        
  //       <Textarea
  //         value={value}
  //         onChange={handleInputChange}
  //         placeholder="Manutenção"
  //         size="xs"
          
  //       />
  //     </>
  //   );
  // }
}
