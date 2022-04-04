import React, { useState } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createSchedule } from "../../graphql/mutations";
import { CreateScheduleInput } from "../../API";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Input,
  Text,
  Flex,
  Button,
  Box,
  Spacer,
  Switch,
  useBoolean,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  fetchSchedules: () => Promise<void>;
}

export const AddSchedule: React.VFC<Props> = ({ fetchSchedules }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allday, setAllday] = useBoolean();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStarttime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [memo, setMemo] = useState("");
  const handleCreateSchedule = async () => {
    const data: CreateScheduleInput = {
      title: title,
      date: date,
      alldayStatus: allday,
      startTime: startTime,
      endTime: endTime,
      memo: memo,
    };
    try {
      if (data.alldayStatus === true) {
        data.startTime = "";
        data.endTime = "";
        await API.graphql(graphqlOperation(createSchedule, { input: data }));
        await fetchSchedules();
        // console.log(data);
      } else {
        await API.graphql(graphqlOperation(createSchedule, { input: data }));
        await fetchSchedules();
        // console.log(data);
      }
      onClose();
      setTitle("");
      setDate("");
      setStarttime("");
      setEndtime("");
      setMemo("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton
          icon={<AddIcon />}
          aria-label="add schedule"
          variant="outline"
          onClick={onOpen}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader border="0"></PopoverHeader>
        <PopoverCloseButton onClick={onClose} />
        <PopoverBody>
          <Text>予定</Text>
          <Input
            placeholder="タイトル"
            size="sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Flex align="center" mt={1}>
            <Box>終日</Box>
            <Switch ml={3} colorScheme="purple" onChange={setAllday.toggle} />
          </Flex>
          <Text mt={1}>日時</Text>
          <Input
            type="date"
            size="sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {allday ? (
            <></>
          ) : (
            <Flex mt={1}>
              <Input
                type="time"
                size="sm"
                mr={1}
                value={startTime}
                onChange={(e) => setStarttime(e.target.value)}
              />
              ~
              <Input
                type="time"
                size="sm"
                ml={1}
                value={endTime}
                onChange={(e) => setEndtime(e.target.value)}
              />
            </Flex>
          )}
          <Text mt={1}>Memo</Text>
          <Textarea onChange={(e) => setMemo(e.target.value)} value={memo} />
        </PopoverBody>
        <PopoverFooter border="0">
          <Flex>
            <Spacer />
            <Button size="sm" onClick={handleCreateSchedule}>
              保存
            </Button>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
