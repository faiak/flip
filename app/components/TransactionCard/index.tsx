import { colors } from 'app/config/styles';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Badge from './Badge';
import styles from './styles';
import { Text, Row, Icon, TransactionCardBank } from 'app/components';
import { ITransactionItem } from 'app/models/api/transaction';
import { formatMoney, formatDate } from 'app/utils/stringUtils';

interface Props extends ITransactionItem {
  onPress?: Function;
}

const tagColor = {
  SUCCESS: colors.COLOR_GREEN,
  PENDING: colors.COLOR_ORANGE,
};

const TransactionCard: React.FC<Props> = ({
  status,
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  created_at,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, { borderLeftColor: tagColor[status] }]}>
      <View style={styles.content}>
        <View>
          <TransactionCardBank
            sender_bank={sender_bank}
            beneficiary_bank={beneficiary_bank}
          />
          <Text
            wrapperStyle={styles.wrapText}
            children={beneficiary_name.toUpperCase()}
          />
          <Row>
            <Text>{formatMoney(amount)}</Text>
            <Icon name="record" size={5} />
            <Text>{formatDate(created_at)}</Text>
          </Row>
        </View>
        <Badge status={status} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
