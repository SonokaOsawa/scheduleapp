import React, { useState, useEffect } from "react";
import { Box, Text, Button, Wrap, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { ExpenseGraph } from "./ExpenseGraph";
import { ExpenseTable } from "./ExpenseTable";
import { expenseCategories, expense } from "../datas";

const zeroPadding = (num: number) => {
  return ("0" + num).slice(-2);
};

export const Expense = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
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

  const exp = expense.filter((ex) => {
    return ex.date.slice(0, 7) === `${year}-${zeroPadding(month)}`;
  });
  const sum = exp.reduce(function (s, e) {
    return s + e.aom;
  }, 0);
  return (
    <>
      <Wrap justify="center" mt={5}>
        <Text fontWeight="bold" fontSize="xl">
          月間支出
        </Text>
      </Wrap>
      <Wrap justify="center" mt={2} align="center">
        <IconButton
          aria-label="Back"
          icon={<ArrowBackIcon />}
          onClick={onClick(-1)}
        />
        <Text fontWeight="bold" fontSize="xl">
          {year}年{month}月
        </Text>
        <IconButton
          aria-label="Forward"
          icon={<ArrowForwardIcon />}
          onClick={onClick(1)}
        />
      </Wrap>
      <Box display={{ md: "flex" }}>
        <ExpenseGraph />
        <ExpenseTable
          expCategories={expenseCategories}
          year={year}
          month={month}
        />
      </Box>
      <Box>
        {expense
          .filter((ex) => {
            return ex.date.slice(0, 7) === `${year}-${zeroPadding(month)}`;
          })
          .reduce(function (s, e) {
            return s + e.aom;
          }, 0)}
      </Box>
    </>
  );
};
