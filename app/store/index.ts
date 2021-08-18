import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from 'app/store/reducers'; // where reducers is a object of reducers
import { ITransactionState } from 'app/models/reducers/transaction';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['transactionReducer'],
  debug: true, //to get useful logging
};

const reducers = persistCombineReducers(config, rootReducers);

let enhancers = null;
if (__DEV__) {
  enhancers = [composeWithDevTools(applyMiddleware(thunk))];
} else {
  enhancers = [applyMiddleware(thunk)];
}
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export interface IRootState {
  transactionReducer: ITransactionState;
}
