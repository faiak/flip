import { colors } from 'app/config/styles';
import React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Text } from 'app/components';
import styles from './styles';

export type Props = {
  label: string;
  isOutline: Boolean;
  color: string;
};

const Badge: React.FC<Props> = ({ label, isOutline, color }) => {
  const containerStyle: ViewStyle = {
    backgroundColor: isOutline ? colors.COLOR_TRANSPARENT : color,
    borderColor: color,
    borderWidth: isOutline ? 1 : 0,
  };
  const textStyle: TextStyle = {
    color: isOutline ? colors.COLOR_BLACK : colors.COLOR_WHITE,
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <Text type="bold" style={textStyle} children={label} />
    </View>
  );
};

export default Badge;
