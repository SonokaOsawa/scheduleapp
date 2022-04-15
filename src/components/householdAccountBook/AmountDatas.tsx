import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
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
  Text,
} from "@chakra-ui/react";

interface Datas {
  aom: number;
  date: string;
  plusorminus: string;
  categoryId: number;
}

interface Props {
  year: number;
  month: number;
  day: number;
}

const zeroPadding = (num: number) => {
  return ("0" + num).slice(-2);
};

export const AmountDatas: React.VFC<Props> = ({ year, month, day }) => {
  const history = useHistory();
  const aomDatas = [
    {
      aom: 2000,
      date: "2022-04-30",
      plusorminus: "支出",
      categoryId: 1,
      id: 1,
    },
  ];

  const categories = [
    { name: "食費", plusorminus: "支出", id: 1, color: "green" },
    {
      name: "外食費",
      plusorminus: "支出",
      id: 2,
      color: "red",
    },
    {
      name: "給料",
      plusorminus: "収入",
      id: 3,
      color: "blue",
    },
  ];

  return (
    <>
      {aomDatas.map(
        (aom) =>
          aom.date === `${year}-${zeroPadding(month)}-${zeroPadding(day)}` && (
            <React.Fragment key={aom.id}>
              {categories
                .filter((cat) => cat.id === aom.categoryId)
                .map((data) => (
                  <Popover key={data.id}>
                    <PopoverTrigger>
                      <Button size="sm" colorScheme={data.color}>
                        <Text isTruncated>{aom.aom}円</Text>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader border="0"></PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Box>
                          <Text>{data.name}</Text>
                          <Text mt={1}></Text>
                        </Box>
                      </PopoverBody>
                      <PopoverFooter border="0">
                        <Flex>
                          <Spacer />
                          <Button
                            size="sm"
                            onClick={() =>
                              history.push("/EditData", {
                                aom: aom.aom,
                                date: aom.date,
                                plusorminus: aom.plusorminus,
                                categoryId: aom.categoryId,
                              })
                            }
                          >
                            編集
                          </Button>
                        </Flex>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                ))}
            </React.Fragment>
          )
      )}
    </>
  );
};
