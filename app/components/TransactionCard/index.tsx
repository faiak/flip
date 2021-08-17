import { colors } from 'app/config/styles';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Badge from './Badge';
import styles from './styles';
import { Text, Row } from 'app/components';
import BaseIcon from 'react-native-vector-icons/Fontisto';
import { ITransactionItem } from 'app/models/api/transaction';
import { getBankName, formatMoney, formatDate } from 'app/utils/stringUtils';

interface Props extends ITransactionItem {}

const Icon: React.FC<{ name: string; size: number }> = ({ name, size }) => (
  <View style={styles.icon}>
    <BaseIcon name={name} size={size} color={colors.COLOR_BLACK} />
  </View>
);

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
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { borderLeftColor: tagColor[status] }]}>
      {/* <View style={[styles.leftTag, { backgroundColor: tagColor[status] }]} /> */}
      <View style={styles.content}>
        <View>
          <Row>
            <Text type="bold" size={15} children={getBankName(sender_bank)} />
            <Icon name="arrow-right" size={12} />
            <Text
              type="bold"
              size={15}
              children={getBankName(beneficiary_bank)}
            />
          </Row>
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
