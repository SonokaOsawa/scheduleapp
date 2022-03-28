import React from "react";

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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const AddSchedule = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<AddIcon />}
          aria-label="add schedule"
          variant="outline"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader border="0"></PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Text>予定</Text>
          <Input placeholder="タイトル" size="sm" />
          <Text mt={1}>日時</Text>
          <Input type="date" size="sm" />
          <Flex mt={1}>
            <Input type="time" size="sm" mr={1} />
            ~
            <Input type="time" size="sm" ml={1} />
          </Flex>
        </PopoverBody>
        <PopoverFooter border="0">
          <Flex>
            <Spacer />
            <Button size="sm">保存</Button>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
