import { colors, fonts } from 'app/config/styles';
import React from 'react';
import { StyleProp, Text as BaseText, TextStyle, View } from 'react-native';
import styles from './styles';

type Props = {
  color?: string;
  type?: 'normal' | 'bold';
  textTransform?: 'uppercase' | 'none';
  size?: number;
  style?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<TextStyle>;
  children?: string;
};

// const Text: React.FC = (props: Props) => {
const Text: React.FC<Props> = ({
  children,
  type,
  size,
  wrapperStyle,
  style,
  color,
}) => {
  // const { variant = 'normal', textTransform = 'none', color, style, x } = props;
  const textStyle: StyleProp<TextStyle> = {
    fontFamily: type === 'bold' ? fonts.LATO_BOLD : fonts.LATO_REGULAR,
    fontSize: size || 12,
    color: color || colors.COLOR_BLACK,
    // fontSize: 15,
    //   textTransform,
    //   color,
    // lineHeight: 24,
  };
  return (
    <View style={wrapperStyle}>
      <BaseText style={[styles.text, textStyle, style]}>{children}</BaseText>
    </View>
  );
};

export default Text;
