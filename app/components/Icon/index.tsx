import { colors } from 'app/config/styles';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BaseIcon from 'react-native-vector-icons/Fontisto';

export type Props = {
  name: string;
  size: number;
};

const Icon: React.FC<Props> = ({ name, size }) => {
  return (
    <View style={styles.icon}>
      <BaseIcon name={name} size={size} color={colors.COLOR_BLACK} />
    </View>
  );
};

export default Icon;
