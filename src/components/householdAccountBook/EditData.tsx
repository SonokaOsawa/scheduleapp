import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";

import {
  Select,
  Box,
  Text,
  Input,
  Flex,
  Button,
  Center,
  Wrap,
} from "@chakra-ui/react";

import { RadioInput } from "./RadioInput";

interface Datas {
  aom: number;
  date: string;
  plusorminus: string;
  categoryId: number;
}

export const EditData = () => {
  const history = useHistory();
  const location = useLocation<Datas>();
  const prop: Datas = location.state;

  const [plusminus, setPlusminus] = useState(prop.plusorminus);
  const [date, setDate] = useState(prop.date);
  const [amount, setAmount] = useState<number>(prop.aom);
  const [category, setCategory] = useState(prop.categoryId);

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

  const handleEdithousehold = () => {
    const data = {
      plusorminus: plusminus,
      date: date,
      amount: amount,
      category: Number(category),
    };
    console.log(data);
    history.push("/Household");
  };

  return (
    <Box mt={6} mx={5}>
      <RadioInput plusminus={plusminus} setPlusminus={setPlusminus} />
      <Flex mt={3} alignItems="center" pr={3}>
        <Input
          placeholder="金額(半角数字)を入力してください"
          mr={4}
          defaultValue={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <span>円</span>
      </Flex>
      <Box mt={3} alignItems="center">
        {plusminus === "収入" && (
          <Select
            placeholder="カテゴリーを選んでください"
            defaultValue={category}
            onChange={(e) => setCategory(Number(e.target.value))}
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
            defaultValue={category}
            onChange={(e) => setCategory(Number(e.target.value))}
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
        <Text>日付</Text>
        <Input
          type="date"
          size="sm"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Box>
      <Center mt={3}>
        <Button onClick={handleEdithousehold}>保存</Button>
      </Center>
    </Box>
  );
};
