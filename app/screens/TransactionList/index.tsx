import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ITransactionState } from 'app/models/reducers/transaction';
import NavigationService from 'app/navigation/NavigationService';
import { TransactionHeader, TransactionCard } from 'app/components';
import { ITransactionItem } from 'app/models/api/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getTransactions } from 'app/store/reducers/transactionReducer';
import transactionSelectors from 'app/store/selectors/transactionSelectors';

interface IState {
  transactionReducer: ITransactionState;
}

const TransactionList: React.FC = () => {
  const data = useSelector((state: IState) =>
    transactionSelectors.getTransactions(state),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
    return () => {};
  }, [dispatch]);

  // const onForgot = () => NavigationService.navigate('ForgotPassword');

  return (
    <SafeAreaView style={styles.container}>
      <TransactionHeader />
      <FlatList
        data={data}
        renderItem={({ item }: { item: ITransactionItem }) => {
          return <TransactionCard {...item} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default TransactionList;
