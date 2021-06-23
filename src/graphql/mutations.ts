/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFotos = /* GraphQL */ `
  mutation CreateFotos(
    $input: CreateFotosInput!
    $condition: ModelFotosConditionInput
  ) {
    createFotos(input: $input, condition: $condition) {
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
export const updateFotos = /* GraphQL */ `
  mutation UpdateFotos(
    $input: UpdateFotosInput!
    $condition: ModelFotosConditionInput
  ) {
    updateFotos(input: $input, condition: $condition) {
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
export const deleteFotos = /* GraphQL */ `
  mutation DeleteFotos(
    $input: DeleteFotosInput!
    $condition: ModelFotosConditionInput
  ) {
    deleteFotos(input: $input, condition: $condition) {
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
