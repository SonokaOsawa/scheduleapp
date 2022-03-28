import React from "react";

import {
  Box,
  Button,
  useBoolean,
  Flex,
  Spacer,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
  Switch,
} from "@chakra-ui/react";

interface Props {
  title: string;
  date: string;
  startTime: string | null;
  endTime: string | null;
  alldayStatus: boolean;
}

export const EditSchedule: React.VFC<Props> = ({
  title,
  date,
  startTime,
  endTime,
  alldayStatus,
}) => {
  const [allday, setAllday] = useBoolean(alldayStatus);
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton size="sm" />
        <ModalBody>
          <Input defaultValue={title} />
          <Flex align="center" mt={1}>
            <Box>終日</Box>
            <Switch
              ml={3}
              colorScheme="purple"
              defaultChecked={allday}
              onChange={setAllday.toggle}
            />
          </Flex>
          <Text mt={1}>日時</Text>
          <Input type="date" size="sm" defaultValue={date} />
          {allday ? (
            <></>
          ) : (
            <>
              {startTime ? (
                <>
                  {endTime && (
                    <Box>
                      <Flex mt={1}>
                        <Input
                          type="time"
                          size="sm"
                          mr={1}
                          defaultValue={startTime}
                        />
                        ~
                        <Input
                          type="time"
                          size="sm"
                          ml={1}
                          defaultValue={endTime}
                        />
                      </Flex>
                    </Box>
                  )}
                </>
              ) : (
                <Flex mt={1}>
                  <Input type="time" size="sm" mr={1} />
                  ~
                  <Input type="time" size="sm" ml={1} />
                </Flex>
              )}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button size="sm">保存</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
