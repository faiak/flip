import { getBankName } from 'app/utils/stringUtils';
import React from 'react';
import { Row, Text, Icon } from 'app/components';

type Props = {
  beneficiary_bank: string;
  sender_bank: string;
  size?: number;
};

const TransactionCardBank: React.FC<Props> = ({
  sender_bank,
  beneficiary_bank,
  size = 15,
}) => {
  return (
    <Row>
      <Text type="bold" size={size || 15} children={getBankName(sender_bank)} />
      <Icon name="arrow-right" size={12} />
      <Text
        type="bold"
        size={size || 15}
        children={getBankName(beneficiary_bank)}
      />
    </Row>
  );
};

export default TransactionCardBank;
