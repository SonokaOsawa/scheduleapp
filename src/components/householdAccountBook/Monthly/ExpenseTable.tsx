import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface Ex {
  date: string;
  aom: number;
  id: number;
  categoryId: number;
}

interface Category {
  name: string;
  id: number;
  color: string;
  data: Ex[];
}

interface Props {
  expCategories: Category[];
  year: number;
  month: number;
}

const zeroPadding = (num: number) => {
  return ("0" + num).slice(-2);
};

export const ExpenseTable: React.VFC<Props> = ({
  expCategories,
  year,
  month,
}) => {
  //   カテゴリーIDを配列に
  const e = expCategories.map((exp) => {
    return exp.id;
  });

  //   カテゴリーごとの合計金額の配列
  let ExCat: number[] = [];
  for (let i = 0; i < e.length; i++) {
    const ee = expCategories.filter((cat) => {
      return cat.id === e[i];
    });
    const sum2 = ee[0].data.filter((data) => {
      return data.date.slice(0, 7) === `${year}-${zeroPadding(month)}`;
    });
    if (sum2.length > 0) {
      const sum3 = sum2.map((aom) => aom.aom);
      const sumsum = sum3.reduce((s, e) => s + e);
      ExCat.push(sumsum);
    } else {
      ExCat.push(0);
    }
  }
  //   カテゴリーID配列を[{categoryID: 数字}]の形に変換
  const categoryID: { categoryID: number; aom?: number }[] = e.map((exp) => ({
    categoryID: exp,
  }));

  for (let i = 0; i < e.length; i++) {
    categoryID[i].aom = ExCat[i];
  }
  // 合計
  const sum = ExCat.reduce((s, e) => {
    return s + e;
  }, 0);
  return (
    <>
      <TableContainer>
        <Table colorScheme="blue">
          <Thead>
            <Tr>
              <Th>カテゴリー</Th>
              <Th isNumeric>金額</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categoryID.map((exp) => (
              <React.Fragment key={exp.categoryID}>
                {expCategories
                  .filter((cat) => {
                    return cat.id === exp.categoryID;
                  })
                  .map((ex) => (
                    <React.Fragment key={ex.id}>
                      {exp.aom ? (
                        <Tr>
                          <Td>{ex.name}</Td>
                          <Td isNumeric>{exp.aom.toLocaleString()}円</Td>
                        </Tr>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
            <Tr>
              <Td>合計</Td>
              <Td isNumeric>{sum.toLocaleString()}円</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
