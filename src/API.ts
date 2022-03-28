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
};

export type ModelScheduleConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  alldayStatus?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  memo?: ModelStringInput | null,
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
};

export type DeleteScheduleInput = {
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
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
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

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
