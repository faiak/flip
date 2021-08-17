import { ITransactionState } from 'app/models/reducers/transaction';

export default {
  getTransactions: (
    {
      transactionReducer,
    }: {
      transactionReducer: ITransactionState;
    },
    { keywords = 'x', sort = 'c' } = {},
  ) => {
    return Object.values(transactionReducer.data);
  },
};
