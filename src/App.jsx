import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box bgColor={"tomato"} w={"500px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"yellow.700"} w={{ base: "100%", md: "500px" }}>
        Lorem ipsum dolor.
      </Box>
    </ChakraProvider>
  );
}

export default App;
