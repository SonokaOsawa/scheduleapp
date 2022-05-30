/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateIncomeCategories = /* GraphQL */ `
  subscription OnCreateIncomeCategories {
    onCreateIncomeCategories {
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
export const onUpdateIncomeCategories = /* GraphQL */ `
  subscription OnUpdateIncomeCategories {
    onUpdateIncomeCategories {
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
export const onDeleteIncomeCategories = /* GraphQL */ `
  subscription OnDeleteIncomeCategories {
    onDeleteIncomeCategories {
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
export const onCreateIncome = /* GraphQL */ `
  subscription OnCreateIncome {
    onCreateIncome {
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
export const onUpdateIncome = /* GraphQL */ `
  subscription OnUpdateIncome {
    onUpdateIncome {
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
export const onDeleteIncome = /* GraphQL */ `
  subscription OnDeleteIncome {
    onDeleteIncome {
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
export const onCreateExpenseCategories = /* GraphQL */ `
  subscription OnCreateExpenseCategories {
    onCreateExpenseCategories {
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
export const onUpdateExpenseCategories = /* GraphQL */ `
  subscription OnUpdateExpenseCategories {
    onUpdateExpenseCategories {
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
export const onDeleteExpenseCategories = /* GraphQL */ `
  subscription OnDeleteExpenseCategories {
    onDeleteExpenseCategories {
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
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense {
    onCreateExpense {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense {
    onUpdateExpense {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense {
    onDeleteExpense {
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
