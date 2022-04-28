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
import { expenseCategories, incomeCategories } from "./datas";

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
  const handleAddhousehold = () => {
    const data = {
      date: date,
      amount: amount,
      category: Number(category),
    };
    console.log(data);

    let cateName: {
      name: string;
      id: number;
      color: string;
    }[] = [];
    if (plusminus === "支出") {
      cateName = expenseCategories.filter((ec) => {
        return ec.id === Number(category);
      });
    } else if (plusminus === "収入") {
      cateName = incomeCategories.filter((ic) => {
        return ic.id === Number(category);
      });
    }
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
          円({cateName[0].name})を記録しました！
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
            {incomeCategories.map((exCat) => (
              <option key={exCat.id} value={exCat.id}>
                {exCat.name}
              </option>
            ))}
          </Select>
        )}
        {plusminus === "支出" && (
          <Select
            placeholder="カテゴリーを選んでください"
            onChange={(e) => setCategory(e.target.value)}
          >
            {expenseCategories.map((inCat) => (
              <option key={inCat.id} value={inCat.id}>
                {inCat.name}
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
