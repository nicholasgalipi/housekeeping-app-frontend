import React from "react";
import { Textarea, Text } from '@chakra-ui/react';

export default function TextArea() {
  let [value, setValue] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      {/* <Text mb="8px">Value: {value}</Text> */}
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Ocorrência"
        size="sm"
      />
    </>
  );
}
