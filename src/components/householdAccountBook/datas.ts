export const expense = [
  {
    date: "2022-04-01",
    aom: 1000,
    id: 0,
    categoryId: 2,
    category: {
      name: "交通費",
      id: 2,
      color: "red",
    },
  },
  {
    date: "2022-04-03",
    aom: 500,
    id: 1,
    categoryId: 1,
    category: {
      name: "食費",
      id: 1,
      color: "green",
    },
  },
  {
    date: "2022-04-05",
    aom: 3000,
    id: 2,
    categoryId: 0,
    category: {
      name: "交際費",
      id: 0,
      color: "yellow",
    },
  },
  {
    date: "2022-04-10",
    aom: 1500,
    id: 3,
    categoryId: 0,
    category: {
      name: "交際費",
      id: 0,
      color: "yellow",
    },
  },
  {
    date: "2022-04-13",
    aom: 4000,
    id: 7,
    categoryId: 1,
    category: {
      name: "食費",
      id: 1,
      color: "green",
    },
  },
  {
    date: "2022-05-10",
    aom: 3000,
    id: 4,
    categoryId: 2,
    category: { name: "交通費", id: 2, color: "red" },
  },
  {
    date: "2022-05-15",
    aom: 1000,
    id: 5,
    categoryId: 0,
    category: {
      name: "交際費",
      id: 0,
      color: "yellow",
    },
  },
  {
    date: "2022-05-20",
    aom: 10000,
    id: 6,
    categoryId: 4,
    category: {
      name: "ライブ",
      id: 4,
      color: "purple",
    },
  },
];

export const income = [
  {
    date: "2022-05-25",
    aom: 189000,
    id: 7,
    categoryId: 3,
  },
  {
    date: "2022-04-25",
    aom: 189000,
    id: 3,
    categoryId: 3,
  },
];

export const expenseCategories = [
  {
    name: "食費",
    id: 1,
    color: "green",
    data: [
      {
        date: "2022-04-03",
        aom: 500,
        id: 1,
        categoryId: 1,
      },
      {
        date: "2022-04-13",
        aom: 4000,
        id: 7,
        categoryId: 1,
      },
    ],
  },
  {
    name: "交通費",
    id: 2,
    color: "red",
    data: [
      {
        date: "2022-04-01",
        aom: 1000,
        id: 0,
        categoryId: 2,
      },
      {
        date: "2022-05-10",
        aom: 3000,
        id: 4,
        categoryId: 2,
      },
    ],
  },
  {
    name: "交際費",
    id: 0,
    color: "yellow",
    data: [
      {
        date: "2022-04-05",
        aom: 3000,
        id: 2,
        categoryId: 0,
      },
      {
        date: "2022-04-10",
        aom: 1500,
        id: 3,
        categoryId: 0,
      },
      {
        date: "2022-05-15",
        aom: 1000,
        id: 5,
        categoryId: 0,
      },
    ],
  },
  {
    name: "ライブ",
    id: 4,
    color: "purple",
    data: [
      {
        date: "2022-05-20",
        aom: 10000,
        id: 6,
        categoryId: 4,
      },
    ],
  },
];

export const incomeCategories = [
  {
    name: "給料",
    id: 3,
    color: "blue",
  },
];
