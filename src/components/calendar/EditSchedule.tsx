import React from "react";

import {
  Box,
  Button,
  useDisclosure,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
} from "@chakra-ui/react";

interface Props {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const EditSchedule: React.VFC<Props> = ({
  title,
  date,
  startTime,
  endTime,
}) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton size="sm" />
        <ModalBody>
          <Input defaultValue={title} />
          <Text mt={1}>日時</Text>
          <Input type="date" size="sm" defaultValue={date} />
          <Flex mt={1}>
            <Input type="time" defaultValue={startTime} size="sm" />
            ~
            <Input type="time" defaultValue={endTime} size="sm" />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button size="sm">保存</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
