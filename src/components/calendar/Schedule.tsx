import React from "react";
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

interface Props {
  year: number;
  month: number;
  day: number;
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

export const Schedule: React.VFC<Props> = ({ year, month, day }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const rows = [
    {
      id: 1,
      title: "打ち合わせ",
      date: "2022-03-29",
      startTime: "13:00",
      endTime: "14:00",
      alldayStatus: false,
    },
    {
      id: 2,
      title: "打ち合わせ2",
      date: "2022-03-30",
      startTime: "13:00",
      endTime: "14:00",
      alldayStatus: false,
    },
    {
      id: 3,
      title: "顔合わせ",
      date: "2022-04-01",
      startTime: null,
      endTime: null,
      alldayStatus: true,
    },
  ];
  return (
    <>
      {rows.map(
        (sche, k) =>
          sche.date === `${year}-${zeroPadding(month)}-${zeroPadding(day)}` && (
            <React.Fragment key={k}>
              <Popover>
                <PopoverTrigger>
                  <Button size="sm" w={24}>
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
                  title={sche.title}
                  date={sche.date}
                  startTime={sche.startTime}
                  endTime={sche.endTime}
                  alldayStatus={sche.alldayStatus}
                />
              </Modal>
            </React.Fragment>
          )
      )}
    </>
  );
};
