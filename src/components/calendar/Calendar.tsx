import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

import {
  Box,
  Icon,
  Button,
  Flex,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { Schedule } from "./Schedule";
import { AddSchedule } from "./AddSchedule";
import { listSchedules } from "../../graphql/queries";
import { CreateScheduleInput } from "../../API";

const createCalendar = (year: number, month: number) => {
  const first = new Date(year, month - 1, 1).getDay();
  return [0, 1, 2, 3, 4, 5].map((weekIndex) => {
    return [0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
      const day = dayIndex + 1 + weekIndex * 7;
      return day - first;
    });
  });
};

export const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [schedules, setSchedules] = useState<CreateScheduleInput[]>([]);
  const fetchSchedules = async () => {
    const apiData = await API.graphql({ query: listSchedules });
    // @ts-ignore
    setSchedules(apiData.data.listSchedules.items);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const calendar = createCalendar(year, month);
  const last = new Date(year, month, 0).getDate();
  // const prevlast = new Date(year, month - 1, 0).getDate();
  const onClick = (n: number) => () => {
    const nextMonth = month + n;
    if (12 < nextMonth) {
      setMonth(1);
      setYear(year + 1);
    } else if (nextMonth < 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(nextMonth);
    }
  };
  return (
    <>
      <Box mt={5}>
        <Flex my={2} alignItems="center">
          <Box fontSize="3xl" mx={4} textAlign="center" fontWeight="bold">
            {`${year}年${month}月`}
          </Box>
          <AddSchedule fetchSchedules={fetchSchedules} />
          <Spacer />
          <Button mr={1} onClick={onClick(-1)} variant="outline">
            <Icon as={ArrowBackIcon} />
          </Button>
          <Button mr={2} onClick={onClick(1)} variant="outline">
            <Icon as={ArrowForwardIcon} />
          </Button>
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th textAlign="center">日</Th>
              <Th textAlign="center">月</Th>
              <Th textAlign="center">火</Th>
              <Th textAlign="center">水</Th>
              <Th textAlign="center">木</Th>
              <Th textAlign="center">金</Th>
              <Th textAlign="center">土</Th>
            </Tr>
          </Thead>
          <Tbody>
            {calendar.map((week, i) => (
              <Tr key={week.join("")}>
                {week.map((day, j) => (
                  <Td h={20} key={`${i}${j}`} id={String(day)}>
                    {day > last ? (
                      <>{/* {day - last}日 */}</>
                    ) : day <= 0 ? (
                      <>{/* {prevlast + day}日 */}</>
                    ) : (
                      <Box>{day}日</Box>
                    )}
                    {schedules && (
                      <Box w={10}>
                        <Schedule
                          year={year}
                          month={month}
                          day={day}
                          schedules={schedules}
                        />
                      </Box>
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};
