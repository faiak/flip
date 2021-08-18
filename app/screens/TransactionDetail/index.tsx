import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useSelector } from 'react-redux';
import styles from './styles';
import { useRoute, RouteProp } from '@react-navigation/native';
import transactionSelectors from 'app/store/selectors/transactionSelectors';
import { ITransactionState } from 'app/models/reducers/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Row,
  Text,
  TransactionCardBank,
  TransactionContent,
} from 'app/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from 'app/config/styles';
import { formatDate, formatMoney } from 'app/utils/stringUtils';
import { RootStackParamList } from 'app/navigation/NavigationStack';

type TransactionDetailRouteProp = RouteProp<
  RootStackParamList,
  'TransactionDetail'
>;

const TransactionDetail: React.FC = () => {
  const { params } = useRoute<TransactionDetailRouteProp>();

  const data = useSelector((state: { transactionReducer: ITransactionState }) =>
    transactionSelectors.getTransactionById(state, params?.id),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: colors.COLOR_WHITE }}>
        <Row style={styles.row}>
          <Text
            size={15}
            wrapperStyle={styles.wrapperIdTxn}
            type="bold">{`ID TRANSAKSI:#${data.id}`}</Text>
          <TouchableOpacity>
            <Icon name="copy-outline" size={18} color={colors.COLOR_ORANGE} />
          </TouchableOpacity>
        </Row>
        <Row style={[styles.row, styles.rowDetail]}>
          <Text size={15} type="bold">
            DETAIL TRANSAKSI
          </Text>
          <TouchableOpacity>
            <Text size={15} color={colors.COLOR_ORANGE}>
              Tutup
            </Text>
          </TouchableOpacity>
        </Row>
        <View style={[styles.row, styles.rowContent]}>
          <TransactionCardBank
            size={18}
            beneficiary_bank={data.beneficiary_bank}
            sender_bank={data.sender_bank}
          />
          <Row>
            <TransactionContent
              first
              title={data.beneficiary_name}
              content={data.account_number}
            />
            <TransactionContent
              title="NOMINAL"
              content={formatMoney(data.amount)}
            />
          </Row>
          <Row>
            <TransactionContent
              first
              title="BERITA TRANSFER"
              content={data.remark}
            />
            <TransactionContent title="KODE UNIK" content={data.unique_code} />
          </Row>
          <Row>
            <TransactionContent
              first
              title="WAKTU DIBUAT"
              content={formatDate(data.created_at)}
            />
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
