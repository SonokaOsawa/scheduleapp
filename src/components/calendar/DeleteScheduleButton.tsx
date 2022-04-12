import React from "react";
import API, { graphqlOperation } from "@aws-amplify/api";
import { useHistory } from "react-router";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { deleteSchedule } from "../../graphql/mutations";

interface Prop {
  id: string;
}

export const DeleteScheduleButton: React.VFC<Prop> = ({ id }) => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteSchedule, { input: { id: id } })
      );
      history.push("/");
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      <Tooltip label="削除">
        <IconButton
          aria-label="delete"
          icon={<DeleteIcon />}
          onClick={onOpen}
          mt={3}
          size="sm"
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>予定を削除する</ModalHeader>
          <ModalCloseButton />
          <ModalBody>本当にこの予定を削除しますか？</ModalBody>
          <ModalFooter>
            <Button size="sm" mr={1} onClick={handleDelete}>
              はい
            </Button>
            <Button size="sm" onClick={onClose}>
              いいえ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
