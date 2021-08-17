import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactNode;
};

// const Text: React.FC = (props: Props) => {
const Row: React.FC<Props> = ({ children }) => {
  // const { variant = 'normal', textTransform = 'none', color, style, x } = props;
  return <View style={styles.row}>{children}</View>;
};

export default Row;
