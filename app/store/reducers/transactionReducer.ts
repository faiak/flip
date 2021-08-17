/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import * as transactionActions from 'app/store/actions/transactionActions';

import { ITransactionState } from 'app/models/reducers/transaction';
import { ITransactionsResponse } from 'app/models/api/transaction';
import getList from 'app/services/transactions';
import type { AppDispatch } from '../index';

const initialState: ITransactionState = {
  data: {},
  isLoading: false,
  keywords: '',
  sort_by: '',
};

export const transactionReducer = createReducer(initialState, {
  [types.TRANSACTIONS_GET]: (state: ITransactionState) => {
    return {
      ...state,
      isLoading: true,
      data: [],
    };
  },
  [types.TRANSACTIONS_GET_SUCCESS]: (
    state: ITransactionState,
    { payload }: { payload: ITransactionsResponse },
  ) => {
    return { ...state, data: payload, isLoading: false };
  },
  [types.TRANSACTIONS_GET_FAILED]: (state: ITransactionState) => {
    return { ...state, isLoaidng: false };
  },
});

export const getTransactions = () => async (dispatch: AppDispatch) => {
  dispatch(transactionActions.getTransactions());
  getList()
    .then(({ data }) => {
      console.log({ data: data });
      dispatch(transactionActions.getTransactionsSuccess(data));
    })
    .catch(error => {
      dispatch(transactionActions.getTransactionsFailed(error));
    });
};
