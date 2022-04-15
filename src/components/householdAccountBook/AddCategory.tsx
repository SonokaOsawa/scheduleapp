import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import API, { graphqlOperation } from "@aws-amplify/api";

import { Box, Text, Button, Input, Wrap } from "@chakra-ui/react";
import { RadioColor } from "../calendar/RadioColor";

interface LocationState {
  plusorminus: string;
}
export const AddCategory = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const prop: LocationState = location.state;
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const handleAddCaregory = async () => {
    const data = {
      category: category,
      color: color,
      plusorminus: prop.plusorminus,
    };
    try {
      console.log(data);
      // history.push("/Household")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box mt={6} mx={5}>
      <Text fontWeight="bold" fontSize="xl">
        カテゴリー作成
      </Text>
      <Box mx={3} mt={4}>
        <Text>カテゴリー名</Text>
        <Input
          mt={1}
          type="text"
          placeholder="カテゴリー名を入力してください"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Box mt={5}>
          <Text>カテゴリーの色</Text>
          <RadioColor color={color} setColor={setColor} />
        </Box>
        <Wrap mt={3} justify="center">
          <Button onClick={handleAddCaregory}>カテゴリーを追加</Button>
        </Wrap>
      </Box>
    </Box>
  );
};
