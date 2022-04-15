import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Flex,
  Spacer,
  Box,
  Text,
  IconButton,
  Badge,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

export const Category = () => {
  const history = useHistory();
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
  const plusCategories = categories.filter((cat) => {
    return cat.plusorminus === "収入";
  });
  const minusCategories = categories.filter((cat) => {
    return cat.plusorminus === "支出";
  });
  return (
    <>
      <Box mt={8} mx={5}>
        <Flex alignItems="center">
          <AddIcon />
          <Text fontSize="xl" mx={2} fontWeight="bold">
            支出
          </Text>
          <Button
            size="sm"
            onClick={() =>
              history.push("/Addcategory", { plusorminus: "支出" })
            }
          >
            カテゴリーを追加
          </Button>
        </Flex>
        <Box px={3}>
          {minusCategories.map((minus) => (
            <Flex key={minus.id} mt={3} alignItems="center">
              <Badge colorScheme={minus.color} fontSize="md" py={1} px={2}>
                {minus.name}
              </Badge>
              <Spacer />
              <IconButton aria-label="delete" icon={<DeleteIcon />} />
            </Flex>
          ))}
        </Box>
      </Box>
      <Box mt={14} mx={5}>
        <Flex alignItems="center">
          <MinusIcon />
          <Text mx={2} fontSize="xl" fontWeight="bold">
            収入
          </Text>
          <Button
            size="sm"
            onClick={() =>
              history.push("/Addcategory", { plusorminus: "収入" })
            }
          >
            カテゴリーを追加
          </Button>
        </Flex>
        <Box px={3}>
          {plusCategories.map((plus) => (
            <Flex key={plus.id} mt={3} alignItems="center">
              <Badge colorScheme={plus.color} fontSize="md" py={1} px={2}>
                {plus.name}
              </Badge>
              <Spacer />
              <IconButton aria-label="delete" icon={<DeleteIcon />} />
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};
