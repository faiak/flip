import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from 'app/components';
import styles from './styles';

export type Props = {
  title: string;
  content: string | Number;
  first?: Boolean;
};

const TransactionContent: React.FC<Props> = ({
  title,
  content,
  first = false,
}) => {
  const style: ViewStyle = { flex: first ? 2 : 1 };
  return (
    <View style={[styles.container, style]}>
      <Text type="bold" size={14}>
        {title.toUpperCase()}
      </Text>
      <Text wrapperStyle={styles.wrapText} size={14}>
        {content.toString()}
      </Text>
    </View>
  );
};

export default TransactionContent;
