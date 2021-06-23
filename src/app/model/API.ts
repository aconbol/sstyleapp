/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFotosInput = {
  id?: string | null,
  cliente: string,
  username: string,
  archivo: string,
  timestamp?: string | null,
  file?: S3ObjectInput | null,
  description?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelFotosConditionInput = {
  cliente?: ModelStringInput | null,
  username?: ModelStringInput | null,
  archivo?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFotosConditionInput | null > | null,
  or?: Array< ModelFotosConditionInput | null > | null,
  not?: ModelFotosConditionInput | null,
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

export type Fotos = {
  __typename: "Fotos",
  id: string,
  cliente: string,
  username: string,
  archivo: string,
  timestamp?: string | null,
  file?: S3Object | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateFotosInput = {
  id: string,
  cliente?: string | null,
  username?: string | null,
  archivo?: string | null,
  timestamp?: string | null,
  file?: S3ObjectInput | null,
  description?: string | null,
};

export type DeleteFotosInput = {
  id: string,
};

export type ModelFotosFilterInput = {
  id?: ModelIDInput | null,
  cliente?: ModelStringInput | null,
  username?: ModelStringInput | null,
  archivo?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFotosFilterInput | null > | null,
  or?: Array< ModelFotosFilterInput | null > | null,
  not?: ModelFotosFilterInput | null,
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

export type ModelFotosConnection = {
  __typename: "ModelFotosConnection",
  items?:  Array<Fotos | null > | null,
  nextToken?: string | null,
};

export type CreateFotosMutationVariables = {
  input: CreateFotosInput,
  condition?: ModelFotosConditionInput | null,
};

export type CreateFotosMutation = {
  createFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFotosMutationVariables = {
  input: UpdateFotosInput,
  condition?: ModelFotosConditionInput | null,
};

export type UpdateFotosMutation = {
  updateFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFotosMutationVariables = {
  input: DeleteFotosInput,
  condition?: ModelFotosConditionInput | null,
};

export type DeleteFotosMutation = {
  deleteFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFotosQueryVariables = {
  id: string,
};

export type GetFotosQuery = {
  getFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFotossQueryVariables = {
  filter?: ModelFotosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFotossQuery = {
  listFotoss?:  {
    __typename: "ModelFotosConnection",
    items?:  Array< {
      __typename: "Fotos",
      id: string,
      cliente: string,
      username: string,
      archivo: string,
      timestamp?: string | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFotosSubscription = {
  onCreateFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFotosSubscription = {
  onUpdateFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFotosSubscription = {
  onDeleteFotos?:  {
    __typename: "Fotos",
    id: string,
    cliente: string,
    username: string,
    archivo: string,
    timestamp?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
