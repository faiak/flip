import { ITransactionsResponse } from '../api/transaction';

export enum SortByType {
  DEFAULT,
  NAME_ASC,
  NAME_DESC,
  DATE_ASC,
  DATE_DESC,
}
export interface ITransactionState {
  isLoading: boolean;
  data: ITransactionsResponse;
  keywords: string;
  sortBy: SortByType;
  error: boolean;
}
