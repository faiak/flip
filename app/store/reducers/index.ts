/*
 * combines all th existing reducers
 */
import * as transactionReducer from './transactionReducer';
export default Object.assign(transactionReducer);
