import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import {
  TransactionHeader,
  TransactionCard,
  Empty,
  Text,
} from 'app/components';
import { ITransactionItem } from 'app/models/api/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import transactionSelectors from 'app/store/selectors/transactionSelectors';
import { fetchTransactions } from 'app/store/actions/transactionActions';
import { colors } from 'app/config/styles';
import { IRootState } from 'app/store';

const TransactionList: React.FC = () => {
  const data = useSelector((state: IRootState) =>
    transactionSelectors.getTransactions(state),
  );
  const isLoading = useSelector((state: IRootState) =>
    transactionSelectors.getLoading(state),
  );
  const isError = useSelector((state: IRootState) =>
    transactionSelectors.getError(state),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    return () => {};
  }, [dispatch]);

  const onDetail = (id: string) =>
    NavigationService.navigate('TransactionDetail', { id });

  return (
    <SafeAreaView style={styles.container}>
      <TransactionHeader />

      {isError ? (
        <Text>Woops!.. something went wrong. Please reload the page</Text>
      ) : null}
      <FlatList
        data={data}
        renderItem={({ item }: { item: ITransactionItem }) => {
          return (
            <TransactionCard
              {...item}
              onPress={() => {
                onDetail(item.id);
              }}
            />
          );
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
