import React from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { TransactionHeader, TransactionCard } from 'app/components';
import { TransactionItem } from 'app/models/api/login';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IState {
  loginReducer: ILoginState;
}

const dataSource = {
  FT26123: {
    id: 'FT26123',
    amount: 1296238,
    unique_code: 238,
    status: 'PENDING',
    sender_bank: 'bni',
    account_number: '573336202',
    beneficiary_name: 'Miranda Bannister',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-08-17 15:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT58568: {
    id: 'FT58568',
    amount: 146258,
    unique_code: 278,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6130416345',
    beneficiary_name: 'Miranda Bannister',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2021-08-17 15:24:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT76704: {
    id: 'FT76704',
    amount: 3605490,
    unique_code: 680,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7806983719',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2021-08-17 15:23:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT41579: {
    id: 'FT41579',
    amount: 2424320,
    unique_code: 612,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '4988850729',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-08-16 12:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT66913: {
    id: 'FT66913',
    amount: 1282062,
    unique_code: 661,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '4455143113',
    beneficiary_name: 'Beck Glover',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2021-08-15 11:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT21920: {
    id: 'FT21920',
    amount: 2094907,
    unique_code: 264,
    status: 'PENDING',
    sender_bank: 'bni',
    account_number: '3551213356',
    beneficiary_name: 'Selin Dawe',
    beneficiary_bank: 'bri',
    remark: 'sample remark',
    created_at: '2021-08-14 10:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT6211: {
    id: 'FT6211',
    amount: 686599,
    unique_code: 235,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '4754525682',
    beneficiary_name: 'Selin Dawe',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-08-13 09:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT64721: {
    id: 'FT64721',
    amount: 141629,
    unique_code: 834,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7739257197',
    beneficiary_name: 'Sammy-Jo Mccall',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2021-08-12 08:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT70816: {
    id: 'FT70816',
    amount: 4934839,
    unique_code: 478,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6928986260',
    beneficiary_name: 'Sammy-Jo Mccall',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2021-08-11 07:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
  FT91895: {
    id: 'FT91895',
    amount: 1740922,
    unique_code: 362,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6712448425',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'btpn',
    remark: 'sample remark',
    created_at: '2021-08-10 06:25:51',
    completed_at: '2021-08-17 15:25:51',
    fee: 0,
  },
};

const TransactionList: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');

  const data = Object.values(dataSource);
  return (
    <SafeAreaView style={styles.container}>
      <TransactionHeader />
      <FlatList
        data={data}
        renderItem={({ item }: { item: TransactionItem }) => {
          return <TransactionCard {...item} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default TransactionList;
