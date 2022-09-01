/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroceryListItem = /* GraphQL */ `
  query GetGroceryListItem($id: ID!) {
    getGroceryListItem(id: $id) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGroceryListItems = /* GraphQL */ `
  query ListGroceryListItems(
    $filter: ModelGroceryListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroceryListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
