import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.900"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"yellow"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"yellow"}>
        Ab, et, minus!
      </Box>
      <Box mb={"10px"} bgColor={"yellow"}>
        Doloremque, eaque, quas.
      </Box>
      <Box ml={"10px"} bgColor={"yellow"}>
        Aliquid, dolor molestiae.
      </Box>
      <Box mr={"10px"} bgColor={"yellow"}>
        Aperiam fugiat, minus?
      </Box>
      <Box mx={"10px"} bgColor={"yellow"}>
        Ducimus, odit, sed.
      </Box>
      <Box my={"10px"} bgColor={"yellow"}>
        Accusantium, et, pariatur?
      </Box>
      <hr />
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Eveniet, modi, quis?
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Aspernatur, eos, laborum.
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Ducimus maxime, voluptate.
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Aspernatur, enim, reiciendis.
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Esse iusto, labore!
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Amet, facilis, in.
      </Box>
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"500px"}>Asperiores, repellendus, sed?</Box>
    </ChakraProvider>
  );
}

export default App;
