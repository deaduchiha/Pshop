import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LoginModalHeader from "./parts/LoginModalHeader";
import LoginModalForm from "./parts/LoginModalForm";
export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={() => onOpen()} m={4}>
        Login
      </Button>
      <Modal isCentered dir={"rtl"} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent minWidth={"560px"} dir="rtl">
          <Stack>
            <LoginModalHeader />
            <LoginModalForm />
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}
