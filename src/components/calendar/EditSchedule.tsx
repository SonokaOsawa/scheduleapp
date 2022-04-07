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

interface LocationState {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
  alldayStatus: boolean;
}

export const EditSchedule: React.VFC = () => {
  const location = useLocation<LocationState>();
  const prop: LocationState = location.state;
  const history = useHistory();

  const [allday, setAllday] = useBoolean(prop.alldayStatus);
  const [uptitle, setTitle] = useState(prop.title);
  const [update, setDate] = useState(prop.date);
  const [upstartTime, setStarttime] = useState(prop.startTime);
  const [upendTime, setEndtime] = useState(prop.endTime);
  const [upmemo, setMemo] = useState(prop.memo);
  const handleUpdateSchedule = async () => {
    const data: CreateScheduleInput = {
      id: prop.id,
      title: uptitle,
      date: update,
      alldayStatus: allday,
      startTime: upstartTime,
      endTime: upendTime,
      memo: upmemo,
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
          defaultValue={uptitle}
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
          defaultValue={update}
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
                  defaultValue={upstartTime}
                  onChange={(e) => setStarttime(e.target.value)}
                />
                ~
                <Input
                  type="time"
                  size="sm"
                  ml={1}
                  defaultValue={upendTime}
                  onChange={(e) => setEndtime(e.target.value)}
                />
              </Flex>
            </Box>
          </>
        )}
        <Text mt={1}>Memo</Text>
        <Textarea
          onChange={(e) => setMemo(e.target.value)}
          defaultValue={upmemo}
        />
        <Button mt={1} size="sm" onClick={handleUpdateSchedule}>
          保存
        </Button>
      </Box>
    </>
  );
};
