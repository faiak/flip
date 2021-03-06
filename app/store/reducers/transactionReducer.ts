/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ITransactionState, SortByType } from 'app/models/reducers/transaction';
import { ITransactionsResponse } from 'app/models/api/transaction';

const initialState: ITransactionState = {
  data: {},
  isLoading: false,
  keywords: '',
  sortBy: SortByType.DEFAULT,
  error: false,
};

export const transactionReducer = createReducer(initialState, {
  [types.TRANSACTIONS_GET]: (state: ITransactionState) => {
    return {
      ...state,
      isLoading: true,
      data: [],
      sortBy: SortByType.DEFAULT,
      keywords: '',
      error: false,
    };
  },
  [types.TRANSACTIONS_GET_SUCCESS]: (
    state: ITransactionState,
    { payload }: { payload: ITransactionsResponse },
  ) => {
    return { ...state, data: payload, isLoading: false };
  },
  [types.TRANSACTIONS_GET_FAILED]: (state: ITransactionState) => {
    return { ...state, isLoaidng: false, error: true };
  },
  [types.TRANSACTIONS_SORT]: (
    state: ITransactionState,
    { payload }: { payload: SortByType },
  ) => {
    return { ...state, sortBy: payload };
  },
  [types.TRANSACTIONS_SEARCH]: (
    state: ITransactionState,
    { payload }: { payload: string },
  ) => {
    return { ...state, keywords: payload };
  },
});
