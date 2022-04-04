import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import {
  Box,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Spacer,
  Modal,
  Text,
} from "@chakra-ui/react";

import { EditSchedule } from "./EditSchedule";
import { listSchedules } from "../../graphql/queries";
import { CreateScheduleInput } from "../../API";

interface Props {
  year: number;
  month: number;
  day: number;
  fetchSchedules: () => Promise<void>;
  schedules: CreateScheduleInput[];
}

const zeroPadding = (num: number) => {
  return ("0" + num).slice(-2);
};

const DateJap = (date: any, format: string) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  return format;
};

export const Schedule: React.VFC<Props> = ({
  year,
  month,
  day,
  fetchSchedules,
  schedules,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {schedules.map(
        (sche, k) =>
          sche.date === `${year}-${zeroPadding(month)}-${zeroPadding(day)}` && (
            <React.Fragment key={k}>
              <Popover>
                <PopoverTrigger>
                  <Button size="sm">
                    <Text isTruncated>{sche.title}</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader border="0"></PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box>
                      <Text fontSize="xl">{sche.title}</Text>
                      <Text mt={1}>
                        {DateJap(new Date(sche.date), "YYYY年MM月DD日")}
                      </Text>
                    </Box>
                    <>
                      {sche.startTime && (
                        <>
                          {sche.endTime && (
                            <Box>
                              {sche.startTime}~{sche.endTime}
                            </Box>
                          )}
                        </>
                      )}
                    </>
                    <Box mt={1}>{sche.memo}</Box>
                  </PopoverBody>
                  <PopoverFooter border="0">
                    <Flex>
                      <Spacer />
                      <Button size="sm" onClick={onOpen}>
                        編集
                      </Button>
                    </Flex>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
              <Modal isOpen={isOpen} onClose={onClose}>
                <EditSchedule
                  id={sche.id}
                  title={sche.title}
                  date={sche.date}
                  startTime={sche.startTime}
                  endTime={sche.endTime}
                  alldayStatus={sche.alldayStatus}
                  memo={sche.memo}
                  fetchSchedules={fetchSchedules}
                />
              </Modal>
            </React.Fragment>
          )
      )}
    </>
  );
};
