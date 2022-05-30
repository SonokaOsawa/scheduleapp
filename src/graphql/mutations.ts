/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
export const createIncomeCategories = /* GraphQL */ `
  mutation CreateIncomeCategories(
    $input: CreateIncomeCategoriesInput!
    $condition: ModelIncomeCategoriesConditionInput
  ) {
    createIncomeCategories(input: $input, condition: $condition) {
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
export const updateIncomeCategories = /* GraphQL */ `
  mutation UpdateIncomeCategories(
    $input: UpdateIncomeCategoriesInput!
    $condition: ModelIncomeCategoriesConditionInput
  ) {
    updateIncomeCategories(input: $input, condition: $condition) {
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
export const deleteIncomeCategories = /* GraphQL */ `
  mutation DeleteIncomeCategories(
    $input: DeleteIncomeCategoriesInput!
    $condition: ModelIncomeCategoriesConditionInput
  ) {
    deleteIncomeCategories(input: $input, condition: $condition) {
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
export const createIncome = /* GraphQL */ `
  mutation CreateIncome(
    $input: CreateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    createIncome(input: $input, condition: $condition) {
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
export const updateIncome = /* GraphQL */ `
  mutation UpdateIncome(
    $input: UpdateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    updateIncome(input: $input, condition: $condition) {
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
export const deleteIncome = /* GraphQL */ `
  mutation DeleteIncome(
    $input: DeleteIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    deleteIncome(input: $input, condition: $condition) {
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
export const createExpenseCategories = /* GraphQL */ `
  mutation CreateExpenseCategories(
    $input: CreateExpenseCategoriesInput!
    $condition: ModelExpenseCategoriesConditionInput
  ) {
    createExpenseCategories(input: $input, condition: $condition) {
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
export const updateExpenseCategories = /* GraphQL */ `
  mutation UpdateExpenseCategories(
    $input: UpdateExpenseCategoriesInput!
    $condition: ModelExpenseCategoriesConditionInput
  ) {
    updateExpenseCategories(input: $input, condition: $condition) {
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
export const deleteExpenseCategories = /* GraphQL */ `
  mutation DeleteExpenseCategories(
    $input: DeleteExpenseCategoriesInput!
    $condition: ModelExpenseCategoriesConditionInput
  ) {
    deleteExpenseCategories(input: $input, condition: $condition) {
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
export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
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
