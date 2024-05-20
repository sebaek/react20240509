import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  // use... : hook
  // if / for 내에서 사용하지 말 것

  // 안전하게 hook은 컴포넌트 가장 상단에 순서대로 작성할 것

  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
