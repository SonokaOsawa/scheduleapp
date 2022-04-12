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
