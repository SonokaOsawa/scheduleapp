import React, { useState } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";

import {
  Box,
  Button,
  useBoolean,
  Flex,
  Textarea,
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

import { CreateScheduleInput } from "../../API";
import { updateSchedule } from "../../graphql/mutations";

interface Props {
  id: string | null | undefined;
  title: string;
  date: string;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  alldayStatus: boolean;
  memo: string | null | undefined;
  fetchSchedules: () => Promise<void>;
}

export const EditSchedule: React.VFC<Props> = ({
  id,
  title,
  date,
  startTime,
  endTime,
  alldayStatus,
  memo,
  fetchSchedules,
}) => {
  const [allday, setAllday] = useBoolean(alldayStatus);
  const [uptitle, setTitle] = useState(title);
  const [update, setDate] = useState(date);
  const [upstartTime, setStarttime] = useState(startTime);
  const [upendTime, setEndtime] = useState(endTime);
  const [upmemo, setMemo] = useState(memo);

  const handleUpdateSchedule = async () => {
    const data: CreateScheduleInput = {
      id: id,
      title: uptitle,
      date: update,
      alldayStatus: allday,
      startTime: upstartTime,
      endTime: upendTime,
      memo: upmemo,
    };
    try {
      // await API.graphql(graphqlOperation(updateSchedule, { input: data }));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton size="sm" />
        <ModalBody>
          <Input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
          <Input
            type="date"
            size="sm"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
          />
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
                          onChange={(e) => setStarttime(e.target.value)}
                        />
                        ~
                        <Input
                          type="time"
                          size="sm"
                          ml={1}
                          defaultValue={endTime}
                          onChange={(e) => setEndtime(e.target.value)}
                        />
                      </Flex>
                    </Box>
                  )}
                </>
              ) : (
                <Flex mt={1}>
                  <Input
                    type="time"
                    size="sm"
                    mr={1}
                    onChange={(e) => setStarttime(e.target.value)}
                  />
                  ~
                  <Input
                    type="time"
                    size="sm"
                    ml={1}
                    onChange={(e) => setEndtime(e.target.value)}
                  />
                </Flex>
              )}
            </>
          )}
          <Text mt={1}>Memo</Text>
          <Textarea onChange={(e) => setMemo(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button size="sm" onClick={handleUpdateSchedule}>
            保存
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
