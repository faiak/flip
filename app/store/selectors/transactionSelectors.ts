import { ITransactionItem } from 'app/models/api/transaction';
import { SortByType } from 'app/models/reducers/transaction';
import { isInclude } from 'app/utils/stringUtils';
import { IRootState } from '..';

export const sortData = (data: ITransactionItem[], sortBy: SortByType) => {
  sortBy = Number(sortBy);
  return data.sort((a, b) => {
    if (sortBy === SortByType.NAME_ASC) {
      return a.beneficiary_name > b.beneficiary_name ? 1 : -1;
    } else if (sortBy === SortByType.NAME_DESC) {
      return b.beneficiary_name > a.beneficiary_name ? 1 : -1;
    } else if (sortBy === SortByType.DATE_DESC) {
      return new Date(b.created_at) > new Date(a.created_at) ? 1 : -1;
    } else if (sortBy === SortByType.DATE_ASC) {
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
  getTransactions: (state: IRootState) => {
    let data = Object.values(state.transactionReducer.data);
    data = sortData(data, state.transactionReducer.sortBy);
    data = filterData(data, state.transactionReducer.keywords);
    return data;
  },
  getTransactionById: (state: IRootState, id: string) => {
    return state.transactionReducer.data[id];
  },
  getLoading: (state: IRootState) => {
    return state.transactionReducer.isLoading;
  },
  getError: (state: IRootState) => {
    return state.transactionReducer.error;
  },
  getKeyword: (state: IRootState) => {
    return state.transactionReducer.keywords;
  },
  getSortBy: (state: IRootState) => {
    return state.transactionReducer.sortBy;
  },
};
