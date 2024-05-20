import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <label htmlFor={"input1"}>이름 </label>
      <input id={"input1"} />
      <hr />
      <Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Center>
      <hr />
      <Checkbox>lorem1</Checkbox>
      <Checkbox>Lorem.</Checkbox>
      <Checkbox>Quas.</Checkbox>
      <Checkbox>Tempora.</Checkbox>
      <hr />
      <RadioGroup>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </RadioGroup>
      <hr />
      <Switch />
      <hr />
      <Textarea></Textarea>
    </ChakraProvider>
  );
}

export default App;
