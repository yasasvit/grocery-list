/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroceryListItem = /* GraphQL */ `
  mutation CreateGroceryListItem(
    $input: CreateGroceryListItemInput!
    $condition: ModelGroceryListItemConditionInput
  ) {
    createGroceryListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateGroceryListItem = /* GraphQL */ `
  mutation UpdateGroceryListItem(
    $input: UpdateGroceryListItemInput!
    $condition: ModelGroceryListItemConditionInput
  ) {
    updateGroceryListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteGroceryListItem = /* GraphQL */ `
  mutation DeleteGroceryListItem(
    $input: DeleteGroceryListItemInput!
    $condition: ModelGroceryListItemConditionInput
  ) {
    deleteGroceryListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
