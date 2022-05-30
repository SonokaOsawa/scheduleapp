/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      title
      date
      alldayStatus
      startTime
      endTime
      memo
      color
      createdAt
      updatedAt
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        alldayStatus
        startTime
        endTime
        memo
        color
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIncomeCategories = /* GraphQL */ `
  query GetIncomeCategories($id: ID!) {
    getIncomeCategories(id: $id) {
      id
      name
      color
      data {
        items {
          id
          cateID
          aom
          date
          createdAt
          updatedAt
          incomeCategoriesDataId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIncomeCategories = /* GraphQL */ `
  query ListIncomeCategories(
    $filter: ModelIncomeCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomeCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        color
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIncome = /* GraphQL */ `
  query GetIncome($id: ID!) {
    getIncome(id: $id) {
      id
      cateID
      aom
      date
      category {
        id
        name
        color
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      incomeCategoriesDataId
    }
  }
`;
export const listIncomes = /* GraphQL */ `
  query ListIncomes(
    $filter: ModelIncomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cateID
        aom
        date
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        incomeCategoriesDataId
      }
      nextToken
    }
  }
`;
export const getExpenseCategories = /* GraphQL */ `
  query GetExpenseCategories($id: ID!) {
    getExpenseCategories(id: $id) {
      id
      name
      color
      data {
        items {
          id
          cateID
          aom
          date
          createdAt
          updatedAt
          expenseCategoriesDataId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listExpenseCategories = /* GraphQL */ `
  query ListExpenseCategories(
    $filter: ModelExpenseCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenseCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        color
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
      id
      cateID
      aom
      date
      category {
        id
        name
        color
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      expenseCategoriesDataId
    }
  }
`;
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cateID
        aom
        date
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        expenseCategoriesDataId
      }
      nextToken
    }
  }
`;
