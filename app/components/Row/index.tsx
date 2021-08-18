import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Row: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

export default Row;
