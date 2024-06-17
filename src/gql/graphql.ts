/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
};

export type Input = {
  __typename?: 'Input';
  blockNumber: Scalars['BigInt']['output'];
  index: Scalars['Int']['output'];
  msgSender: Scalars['String']['output'];
  notice: Notice;
  notices: NoticeConnection;
  payload: Scalars['String']['output'];
  report: Report;
  reports: ReportConnection;
  timestamp: Scalars['BigInt']['output'];
  voucher: Voucher;
  vouchers: VoucherConnection;
};


export type InputNoticeArgs = {
  index: Scalars['Int']['input'];
};


export type InputNoticesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InputReportArgs = {
  index: Scalars['Int']['input'];
};


export type InputReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InputVoucherArgs = {
  index: Scalars['Int']['input'];
};


export type InputVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitInput: PricePrediction;
};


export type MutationSubmitInputArgs = {
  input: PredictionInput;
};

export type Notice = {
  __typename?: 'Notice';
  index: Scalars['Int']['output'];
  input: Input;
  payload: Scalars['String']['output'];
  proof?: Maybe<Proof>;
};

export type NoticeConnection = {
  __typename?: 'NoticeConnection';
  edges: Array<NoticeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NoticeEdge = {
  __typename?: 'NoticeEdge';
  cursor: Scalars['String']['output'];
  node: Notice;
};

export type OutputValidityProof = {
  __typename?: 'OutputValidityProof';
  inputIndexWithinEpoch: Scalars['Int']['output'];
  machineStateHash: Scalars['String']['output'];
  noticesEpochRootHash: Scalars['String']['output'];
  outputHashInOutputHashesSiblings: Array<Scalars['String']['output']>;
  outputHashesInEpochSiblings: Array<Scalars['String']['output']>;
  outputHashesRootHash: Scalars['String']['output'];
  outputIndexWithinInput: Scalars['Int']['output'];
  vouchersEpochRootHash: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PredictionInput = {
  humidity: Scalars['Int']['input'];
  region: Region;
  temperature: Scalars['Int']['input'];
};

export type PricePrediction = {
  __typename?: 'PricePrediction';
  humidity: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  predictedPrice: PriceTrend;
  region: Region;
  temperature: Scalars['Int']['output'];
  timestamp: Scalars['String']['output'];
};

export enum PriceTrend {
  Decrease = 'DECREASE',
  Increase = 'INCREASE'
}

export type Proof = {
  __typename?: 'Proof';
  context: Scalars['String']['output'];
  validity: OutputValidityProof;
};

export type Query = {
  __typename?: 'Query';
  predictPrice: PricePrediction;
  predictionHistory: Array<PricePrediction>;
};


export type QueryPredictPriceArgs = {
  humidity: Scalars['Int']['input'];
  region: Region;
  temperature: Scalars['Int']['input'];
};


export type QueryPredictionHistoryArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Region>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export enum Region {
  Africa = 'AFRICA',
  Asia = 'ASIA',
  SouthAmerica = 'SOUTH_AMERICA'
}

export type Report = {
  __typename?: 'Report';
  index: Scalars['Int']['output'];
  input: Input;
  payload: Scalars['String']['output'];
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  edges: Array<ReportEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  cursor: Scalars['String']['output'];
  node: Report;
};

export type Voucher = {
  __typename?: 'Voucher';
  destination: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  input: Input;
  payload: Scalars['String']['output'];
  proof?: Maybe<Proof>;
};

export type VoucherConnection = {
  __typename?: 'VoucherConnection';
  edges: Array<VoucherEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VoucherEdge = {
  __typename?: 'VoucherEdge';
  cursor: Scalars['String']['output'];
  node: Voucher;
};

export type PredictPriceQueryVariables = Exact<{
  region: Region;
  temperature: Scalars['Int']['input'];
  humidity: Scalars['Int']['input'];
}>;


export type PredictPriceQuery = { __typename?: 'Query', predictPrice: { __typename?: 'PricePrediction', id: string, region: Region, temperature: number, humidity: number, predictedPrice: PriceTrend, timestamp: string } };

export type PredictionHistoryQueryVariables = Exact<{
  region?: InputMaybe<Region>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type PredictionHistoryQuery = { __typename?: 'Query', predictionHistory: Array<{ __typename?: 'PricePrediction', id: string, region: Region, temperature: number, humidity: number, predictedPrice: PriceTrend, timestamp: string }> };

export type SubmitInputMutationVariables = Exact<{
  input: PredictionInput;
}>;


export type SubmitInputMutation = { __typename?: 'Mutation', submitInput: { __typename?: 'PricePrediction', id: string, region: Region, temperature: number, humidity: number, predictedPrice: PriceTrend, timestamp: string } };


export const PredictPriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PredictPrice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"temperature"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"humidity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"predictPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}},{"kind":"Argument","name":{"kind":"Name","value":"temperature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"temperature"}}},{"kind":"Argument","name":{"kind":"Name","value":"humidity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"humidity"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"predictedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<PredictPriceQuery, PredictPriceQueryVariables>;
export const PredictionHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PredictionHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"predictionHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"predictedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<PredictionHistoryQuery, PredictionHistoryQueryVariables>;
export const SubmitInputDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitInput"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PredictionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitInput"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"predictedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<SubmitInputMutation, SubmitInputMutationVariables>;