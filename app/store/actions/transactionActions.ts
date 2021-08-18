/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ITransactionsResponse } from 'app/models/api/transaction';
import getList from 'app/services/transactions';

import type { AppDispatch } from '../index';
import { SortByType } from 'app/models/reducers/transaction';

export const getTransactions = () => {
  return {
    type: types.TRANSACTIONS_GET,
  };
};

export const getTransactionsSuccess = (payload: ITransactionsResponse) => {
  return {
    type: types.TRANSACTIONS_GET_SUCCESS,
    payload,
  };
};

export const getTransactionsFailed = err => {
  return {
    type: types.TRANSACTIONS_GET_FAILED,
    error: err,
  };
};

export const sortTransactions = (sortBy: SortByType) => {
  return {
    type: types.TRANSACTIONS_SORT,
    payload: sortBy,
  };
};

export const searchTransactions = (keywords: string) => {
  return {
    type: types.TRANSACTIONS_SEARCH,
    payload: keywords,
  };
};

export const fetchTransactions = () => async (dispatch: AppDispatch) => {
  dispatch(getTransactions());
  getList()
    .then(({ data }) => {
      dispatch(getTransactionsSuccess(data));
    })
    .catch(error => {
      dispatch(getTransactionsFailed(error));
    });
};
