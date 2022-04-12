import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import API, { graphqlOperation } from "@aws-amplify/api";

import {
  Box,
  Button,
  useBoolean,
  Flex,
  Textarea,
  Input,
  Text,
  Switch,
} from "@chakra-ui/react";

import { CreateScheduleInput } from "../../API";
import { updateSchedule } from "../../graphql/mutations";
import { RadioColor } from "./RadioColor";
import { DeleteScheduleButton } from "./DeleteScheduleButton";

interface LocationState {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
  alldayStatus: boolean;
  color: string;
}

export const EditSchedule: React.VFC = () => {
  const location = useLocation<LocationState>();
  const prop: LocationState = location.state;
  const history = useHistory();

  const [allday, setAllday] = useBoolean(prop.alldayStatus);
  const [title, setTitle] = useState(prop.title);
  const [date, setDate] = useState(prop.date);
  const [startTime, setStarttime] = useState(prop.startTime);
  const [endTime, setEndtime] = useState(prop.endTime);
  const [memo, setMemo] = useState(prop.memo);
  const [color, setColor] = useState(prop.color);
  const handleUpdateSchedule = async () => {
    const data: CreateScheduleInput = {
      id: prop.id,
      title: title,
      date: date,
      alldayStatus: allday,
      startTime: startTime,
      endTime: endTime,
      memo: memo,
      color: color,
    };
    try {
      if (data.alldayStatus === true) {
        data.startTime = "";
        data.endTime = "";
        await API.graphql(graphqlOperation(updateSchedule, { input: data }));
        history.push("/Calendar");
        // console.log(data);
      } else {
        await API.graphql(graphqlOperation(updateSchedule, { input: data }));
        history.push("/Calendar");
        // console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Box mt={5} px={5}>
        <Input
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Flex align="center" mt={3}>
          <Box>終日</Box>
          <Switch
            ml={3}
            colorScheme="purple"
            defaultChecked={allday}
            onChange={setAllday.toggle}
          />
        </Flex>
        <Box mt={2}>
          <RadioColor color={color} setColor={setColor} />
        </Box>
        <Text mt={3}>日時</Text>
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
          </>
        )}
        <Text mt={3}>Memo</Text>
        <Textarea
          onChange={(e) => setMemo(e.target.value)}
          defaultValue={memo}
        />
        <Button mt={3} mr={1} size="sm" onClick={handleUpdateSchedule}>
          保存
        </Button>
        <DeleteScheduleButton id={prop.id} />
      </Box>
    </>
  );
};
