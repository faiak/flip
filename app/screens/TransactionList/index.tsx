import React, { useEffect } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ITransactionState } from 'app/models/reducers/transaction';
import NavigationService from 'app/navigation/NavigationService';
import { TransactionHeader, TransactionCard, Text } from 'app/components';
import { ITransactionItem } from 'app/models/api/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import transactionSelectors from 'app/store/selectors/transactionSelectors';
import {
  fetchTransactions,
  sortTransactions,
  searchTransactions,
} from 'app/store/actions/transactionActions';
import { colors } from 'app/config/styles';
import Loading from 'app/components/Loading';
import Empty from 'app/components/Empty';

interface IState {
  transactionReducer: ITransactionState;
}

const TransactionList: React.FC = () => {
  const data = useSelector((state: IState) =>
    transactionSelectors.getTransactions(state),
  );
  const isLoading = useSelector((state: IState) =>
    transactionSelectors.getLoading(state),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    // dispatch(sortTransactions('NAME_ASC'));
    // dispatch(searchTransactions('BCA'));
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
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? null : <Empty />}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            colors={[colors.COLOR_ORANGE]}
            tintColor={colors.COLOR_ORANGE}
            onRefresh={() => dispatch(fetchTransactions())}
          />
        }
      />
    </SafeAreaView>
  );
};

export default TransactionList;
