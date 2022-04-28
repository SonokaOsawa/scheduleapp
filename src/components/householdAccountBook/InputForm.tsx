import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import {
  Select,
  Box,
  Text,
  Input,
  Flex,
  Button,
  Center,
  Wrap,
  useToast,
} from "@chakra-ui/react";

import { RadioInput } from "./RadioInput";

interface Categ {
  name: string;
  plusorminus: string;
  id: number;
  color: string;
}

const DateJap = (date: any, format: string) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  return format;
};

export const InputForm = () => {
  const history = useHistory();
  const toast = useToast();
  const [plusminus, setPlusminus] = useState("支出");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState("");
  const categories: Categ[] = [
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
  const handleAddhousehold = () => {
    const data = {
      plusorminus: plusminus,
      date: date,
      amount: amount,
      category: Number(category),
    };
    console.log(data);
    const categoryName = categories.filter((cat) => {
      return cat.id === Number(category);
    });
    toast({
      position: "top",
      duration: 3000,
      render: () => (
        <Box
          borderRadius="lg"
          bg="white"
          textAlign="center"
          p={2}
          color="gray.700"
        >
          {DateJap(new Date(date), "YYYY年MM月DD日")}の{plusminus}、{amount}
          円({categoryName[0].name})を記録しました！
        </Box>
      ),
    });
  };
  return (
    <Box mt={6} mx={5}>
      <RadioInput plusminus={plusminus} setPlusminus={setPlusminus} />
      <Flex mt={3} alignItems="center" pr={3}>
        <Input
          placeholder="金額(半角数字)を入力してください"
          mr={4}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <span>円</span>
      </Flex>
      <Box mt={3} alignItems="center">
        {plusminus === "収入" && (
          <Select
            placeholder="カテゴリーを選んでください"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories
              .filter((plus) => plus.plusorminus === "収入")
              .map((pl) => (
                <option key={pl.id} value={pl.id}>
                  {pl.name}
                </option>
              ))}
          </Select>
        )}
        {plusminus === "支出" && (
          <Select
            placeholder="カテゴリーを選んでください"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories
              .filter((minus) => minus.plusorminus === "支出")
              .map((min) => (
                <option key={min.id} value={min.id}>
                  {min.name}
                </option>
              ))}
          </Select>
        )}

        <Wrap mt={3} justify="end">
          <Button fontSize="sm" onClick={() => history.push("/Categories")}>
            カテゴリー追加/編集
          </Button>
        </Wrap>
      </Box>
      <Box mt={3}>
        <Text fontWeight="bold">日付</Text>
        <Input
          type="date"
          size="sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Box>
      <Center mt={3}>
        <Button onClick={handleAddhousehold}>保存</Button>
      </Center>
    </Box>
  );
};
