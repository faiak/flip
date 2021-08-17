import { ITransactionsResponse } from '../api/transaction';

export interface ITransactionState {
  isLoading: boolean;
  data: ITransactionsResponse;
  keywords: string;
  sort_by: string;
}
