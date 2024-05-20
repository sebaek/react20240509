import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray </Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Dolores?</Button>
        <Button colorScheme={"yellow"}>Doloribus!</Button>
        <Button colorScheme={"green"}>Rerum.</Button>
        <Button colorScheme={"teal"}>Tempore.</Button>
        <Button colorScheme={"blue"}>Sequi.</Button>
        <Button colorScheme={"cyan"}>Sint.</Button>
        <Button colorScheme={"purple"}>Cupiditate?</Button>
        <Button colorScheme={"pink"}>Nemo!</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Natus.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Voluptatem?
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Accusantium!
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
