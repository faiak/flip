/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ITransactionsResponse } from 'app/models/api/transaction';

export function getTransactions() {
  return {
    type: types.TRANSACTIONS_GET,
  };
}

export function getTransactionsSuccess(payload: ITransactionsResponse) {
  return {
    type: types.TRANSACTIONS_GET_SUCCESS,
    payload,
  };
}

export function getTransactionsFailed(err) {
  return {
    type: types.TRANSACTIONS_GET_FAILED,
    error: err,
  };
}
