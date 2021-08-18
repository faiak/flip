import { colors } from 'app/config/styles';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

type Props = {};

const Loading: React.FC<Props> = () => {
  return (
    <View style={[styles.center]}>
      <ActivityIndicator color={colors.COLOR_ORANGE} size="large" />
    </View>
  );
};

export default Loading;
