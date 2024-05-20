import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>모달 오픈!</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TITLE</ModalHeader>
          <ModalBody>Lorem ipsum dolor.</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
            <Button colorScheme={"blue"}>저장</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
