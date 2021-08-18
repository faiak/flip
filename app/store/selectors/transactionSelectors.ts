import { ITransactionItem } from 'app/models/api/transaction';
import { ITransactionState, SortByType } from 'app/models/reducers/transaction';
import { isInclude } from 'app/utils/stringUtils';

export const sortData = (data: ITransactionItem[], sortBy: SortByType) => {
  return data.sort((a, b) => {
    if (sortBy === 'NAME_ASC') {
      return a.beneficiary_name > b.beneficiary_name ? 1 : -1;
    } else if (sortBy === 'NAME_DESC') {
      return b.beneficiary_name > a.beneficiary_name ? 1 : -1;
    } else if (sortBy === 'DATE_DESC') {
      return new Date(b.created_at) > new Date(a.created_at) ? 1 : -1;
    } else if (sortBy === 'DATE_ASC') {
      return new Date(a.created_at) > new Date(b.created_at) ? 1 : -1;
    } else {
      return 1;
    }
  });
};

export const filterData = (data: ITransactionItem[], keyword: string) => {
  return data.filter(
    ({ beneficiary_name, sender_bank, beneficiary_bank, amount }) =>
      isInclude(beneficiary_name, keyword) ||
      isInclude(beneficiary_bank, keyword) ||
      isInclude(sender_bank, keyword) ||
      isInclude(amount.toString(), keyword),
  );
};

export default {
  getTransactions: ({
    transactionReducer,
  }: {
    transactionReducer: ITransactionState;
  }) => {
    let data = Object.values(transactionReducer.data);
    data = sortData(data, transactionReducer.sortBy);
    data = filterData(data, transactionReducer.keywords);

    return data;
  },
  getLoading: ({
    transactionReducer,
  }: {
    transactionReducer: ITransactionState;
  }) => {
    return transactionReducer.isLoading;
  },
};
