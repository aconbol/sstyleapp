/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFotos = /* GraphQL */ `
  query GetFotos($id: ID!) {
    getFotos(id: $id) {
      id
      cliente
      username
      archivo
      timestamp
      file {
        bucket
        region
        key
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFotoss = /* GraphQL */ `
  query ListFotoss(
    $filter: ModelFotosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFotoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cliente
        username
        archivo
        timestamp
        file {
          bucket
          region
          key
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
