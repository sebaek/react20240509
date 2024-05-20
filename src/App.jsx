import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  function handleButtonClick(e) {
    // event bubbling 멈추기
    e.stopPropagation();

    console.log("버튼 클릭됨");
  }

  function handleBoxClick() {
    console.log("박스 클릭됨");
  }

  return (
    <ChakraProvider>
      <Box onClick={handleBoxClick} w={"100px"} h={"100px"} bgColor={"orange"}>
        <Button onClick={handleButtonClick}>클릭</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
