/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateScheduleInput = {
  id?: string | null,
  title: string,
  date: string,
  alldayStatus?: boolean | null,
  startTime?: string | null,
  endTime?: string | null,
  memo?: string | null,
  color?: string | null,
};

export type ModelScheduleConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  alldayStatus?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  title: string,
  date: string,
  alldayStatus?: boolean | null,
  startTime?: string | null,
  endTime?: string | null,
  memo?: string | null,
  color?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScheduleInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  alldayStatus?: boolean | null,
  startTime?: string | null,
  endTime?: string | null,
  memo?: string | null,
  color?: string | null,
};

export type DeleteScheduleInput = {
  id: string,
};

export type CreateIncomeCategoriesInput = {
  id?: string | null,
  name: string,
  color: string,
};

export type ModelIncomeCategoriesConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelIncomeCategoriesConditionInput | null > | null,
  or?: Array< ModelIncomeCategoriesConditionInput | null > | null,
  not?: ModelIncomeCategoriesConditionInput | null,
};

export type IncomeCategories = {
  __typename: "IncomeCategories",
  id: string,
  name: string,
  color: string,
  data?: ModelIncomeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIncomeConnection = {
  __typename: "ModelIncomeConnection",
  items:  Array<Income | null >,
  nextToken?: string | null,
};

export type Income = {
  __typename: "Income",
  id: string,
  cateID: string,
  aom: number,
  date: string,
  category?: IncomeCategories | null,
  createdAt: string,
  updatedAt: string,
  incomeCategoriesDataId?: string | null,
};

export type UpdateIncomeCategoriesInput = {
  id: string,
  name?: string | null,
  color?: string | null,
};

export type DeleteIncomeCategoriesInput = {
  id: string,
};

export type CreateIncomeInput = {
  id?: string | null,
  cateID: string,
  aom: number,
  date: string,
  incomeCategoriesDataId?: string | null,
};

export type ModelIncomeConditionInput = {
  cateID?: ModelIDInput | null,
  aom?: ModelIntInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelIncomeConditionInput | null > | null,
  or?: Array< ModelIncomeConditionInput | null > | null,
  not?: ModelIncomeConditionInput | null,
  incomeCategoriesDataId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateIncomeInput = {
  id: string,
  cateID?: string | null,
  aom?: number | null,
  date?: string | null,
  incomeCategoriesDataId?: string | null,
};

export type DeleteIncomeInput = {
  id: string,
};

export type CreateExpenseCategoriesInput = {
  id?: string | null,
  name: string,
  color: string,
};

export type ModelExpenseCategoriesConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelExpenseCategoriesConditionInput | null > | null,
  or?: Array< ModelExpenseCategoriesConditionInput | null > | null,
  not?: ModelExpenseCategoriesConditionInput | null,
};

export type ExpenseCategories = {
  __typename: "ExpenseCategories",
  id: string,
  name: string,
  color: string,
  data?: ModelExpenseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection",
  items:  Array<Expense | null >,
  nextToken?: string | null,
};

export type Expense = {
  __typename: "Expense",
  id: string,
  cateID: string,
  aom: number,
  date: string,
  category?: ExpenseCategories | null,
  createdAt: string,
  updatedAt: string,
  expenseCategoriesDataId?: string | null,
};

export type UpdateExpenseCategoriesInput = {
  id: string,
  name?: string | null,
  color?: string | null,
};

export type DeleteExpenseCategoriesInput = {
  id: string,
};

export type CreateExpenseInput = {
  id?: string | null,
  cateID: string,
  aom: number,
  date: string,
  expenseCategoriesDataId?: string | null,
};

export type ModelExpenseConditionInput = {
  cateID?: ModelIDInput | null,
  aom?: ModelIntInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelExpenseConditionInput | null > | null,
  or?: Array< ModelExpenseConditionInput | null > | null,
  not?: ModelExpenseConditionInput | null,
  expenseCategoriesDataId?: ModelIDInput | null,
};

export type UpdateExpenseInput = {
  id: string,
  cateID?: string | null,
  aom?: number | null,
  date?: string | null,
  expenseCategoriesDataId?: string | null,
};

export type DeleteExpenseInput = {
  id: string,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  alldayStatus?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
};

export type ModelIncomeCategoriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelIncomeCategoriesFilterInput | null > | null,
  or?: Array< ModelIncomeCategoriesFilterInput | null > | null,
  not?: ModelIncomeCategoriesFilterInput | null,
};

export type ModelIncomeCategoriesConnection = {
  __typename: "ModelIncomeCategoriesConnection",
  items:  Array<IncomeCategories | null >,
  nextToken?: string | null,
};

export type ModelIncomeFilterInput = {
  id?: ModelIDInput | null,
  cateID?: ModelIDInput | null,
  aom?: ModelIntInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelIncomeFilterInput | null > | null,
  or?: Array< ModelIncomeFilterInput | null > | null,
  not?: ModelIncomeFilterInput | null,
  incomeCategoriesDataId?: ModelIDInput | null,
};

export type ModelExpenseCategoriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelExpenseCategoriesFilterInput | null > | null,
  or?: Array< ModelExpenseCategoriesFilterInput | null > | null,
  not?: ModelExpenseCategoriesFilterInput | null,
};

export type ModelExpenseCategoriesConnection = {
  __typename: "ModelExpenseCategoriesConnection",
  items:  Array<ExpenseCategories | null >,
  nextToken?: string | null,
};

export type ModelExpenseFilterInput = {
  id?: ModelIDInput | null,
  cateID?: ModelIDInput | null,
  aom?: ModelIntInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelExpenseFilterInput | null > | null,
  or?: Array< ModelExpenseFilterInput | null > | null,
  not?: ModelExpenseFilterInput | null,
  expenseCategoriesDataId?: ModelIDInput | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIncomeCategoriesMutationVariables = {
  input: CreateIncomeCategoriesInput,
  condition?: ModelIncomeCategoriesConditionInput | null,
};

export type CreateIncomeCategoriesMutation = {
  createIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIncomeCategoriesMutationVariables = {
  input: UpdateIncomeCategoriesInput,
  condition?: ModelIncomeCategoriesConditionInput | null,
};

export type UpdateIncomeCategoriesMutation = {
  updateIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIncomeCategoriesMutationVariables = {
  input: DeleteIncomeCategoriesInput,
  condition?: ModelIncomeCategoriesConditionInput | null,
};

export type DeleteIncomeCategoriesMutation = {
  deleteIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIncomeMutationVariables = {
  input: CreateIncomeInput,
  condition?: ModelIncomeConditionInput | null,
};

export type CreateIncomeMutation = {
  createIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type UpdateIncomeMutationVariables = {
  input: UpdateIncomeInput,
  condition?: ModelIncomeConditionInput | null,
};

export type UpdateIncomeMutation = {
  updateIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type DeleteIncomeMutationVariables = {
  input: DeleteIncomeInput,
  condition?: ModelIncomeConditionInput | null,
};

export type DeleteIncomeMutation = {
  deleteIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type CreateExpenseCategoriesMutationVariables = {
  input: CreateExpenseCategoriesInput,
  condition?: ModelExpenseCategoriesConditionInput | null,
};

export type CreateExpenseCategoriesMutation = {
  createExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExpenseCategoriesMutationVariables = {
  input: UpdateExpenseCategoriesInput,
  condition?: ModelExpenseCategoriesConditionInput | null,
};

export type UpdateExpenseCategoriesMutation = {
  updateExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExpenseCategoriesMutationVariables = {
  input: DeleteExpenseCategoriesInput,
  condition?: ModelExpenseCategoriesConditionInput | null,
};

export type DeleteExpenseCategoriesMutation = {
  deleteExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExpenseMutationVariables = {
  input: CreateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type CreateExpenseMutation = {
  createExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type UpdateExpenseMutationVariables = {
  input: UpdateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type UpdateExpenseMutation = {
  updateExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type DeleteExpenseMutationVariables = {
  input: DeleteExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type DeleteExpenseMutation = {
  deleteExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      title: string,
      date: string,
      alldayStatus?: boolean | null,
      startTime?: string | null,
      endTime?: string | null,
      memo?: string | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIncomeCategoriesQueryVariables = {
  id: string,
};

export type GetIncomeCategoriesQuery = {
  getIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIncomeCategoriesQueryVariables = {
  filter?: ModelIncomeCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncomeCategoriesQuery = {
  listIncomeCategories?:  {
    __typename: "ModelIncomeCategoriesConnection",
    items:  Array< {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIncomeQueryVariables = {
  id: string,
};

export type GetIncomeQuery = {
  getIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type ListIncomesQueryVariables = {
  filter?: ModelIncomeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncomesQuery = {
  listIncomes?:  {
    __typename: "ModelIncomeConnection",
    items:  Array< {
      __typename: "Income",
      id: string,
      cateID: string,
      aom: number,
      date: string,
      category?:  {
        __typename: "IncomeCategories",
        id: string,
        name: string,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      incomeCategoriesDataId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExpenseCategoriesQueryVariables = {
  id: string,
};

export type GetExpenseCategoriesQuery = {
  getExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExpenseCategoriesQueryVariables = {
  filter?: ModelExpenseCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExpenseCategoriesQuery = {
  listExpenseCategories?:  {
    __typename: "ModelExpenseCategoriesConnection",
    items:  Array< {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExpenseQueryVariables = {
  id: string,
};

export type GetExpenseQuery = {
  getExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type ListExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExpensesQuery = {
  listExpenses?:  {
    __typename: "ModelExpenseConnection",
    items:  Array< {
      __typename: "Expense",
      id: string,
      cateID: string,
      aom: number,
      date: string,
      category?:  {
        __typename: "ExpenseCategories",
        id: string,
        name: string,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      expenseCategoriesDataId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    title: string,
    date: string,
    alldayStatus?: boolean | null,
    startTime?: string | null,
    endTime?: string | null,
    memo?: string | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIncomeCategoriesSubscription = {
  onCreateIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIncomeCategoriesSubscription = {
  onUpdateIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIncomeCategoriesSubscription = {
  onDeleteIncomeCategories?:  {
    __typename: "IncomeCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelIncomeConnection",
      items:  Array< {
        __typename: "Income",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        incomeCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIncomeSubscription = {
  onCreateIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type OnUpdateIncomeSubscription = {
  onUpdateIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type OnDeleteIncomeSubscription = {
  onDeleteIncome?:  {
    __typename: "Income",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "IncomeCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelIncomeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    incomeCategoriesDataId?: string | null,
  } | null,
};

export type OnCreateExpenseCategoriesSubscription = {
  onCreateExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExpenseCategoriesSubscription = {
  onUpdateExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExpenseCategoriesSubscription = {
  onDeleteExpenseCategories?:  {
    __typename: "ExpenseCategories",
    id: string,
    name: string,
    color: string,
    data?:  {
      __typename: "ModelExpenseConnection",
      items:  Array< {
        __typename: "Expense",
        id: string,
        cateID: string,
        aom: number,
        date: string,
        createdAt: string,
        updatedAt: string,
        expenseCategoriesDataId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExpenseSubscription = {
  onCreateExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type OnUpdateExpenseSubscription = {
  onUpdateExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};

export type OnDeleteExpenseSubscription = {
  onDeleteExpense?:  {
    __typename: "Expense",
    id: string,
    cateID: string,
    aom: number,
    date: string,
    category?:  {
      __typename: "ExpenseCategories",
      id: string,
      name: string,
      color: string,
      data?:  {
        __typename: "ModelExpenseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    expenseCategoriesDataId?: string | null,
  } | null,
};
