import React from "react";
import { Button, ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          toast({
            title: "토스트 제목",
            description: "토스트 내용",
            position: "top",
            status: "info",
            isClosable: true,
            duration: 1000,
          });
        }}
      ></Button>
    </ChakraProvider>
  );
}

export default App;
