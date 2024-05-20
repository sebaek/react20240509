import React from "react";
import { Badge, Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box onClick={handleBoxClick} w={"200px"} bgColor={"gray"} p={10}>
        <Button onClick={handleButtonClick} colorScheme={"blue"}>
          클릭
          <Badge onClick={handleBadgeClick} ml={3}>
            new
          </Badge>
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
