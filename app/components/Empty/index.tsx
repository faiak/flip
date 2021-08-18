import { colors } from 'app/config/styles';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Text from '../Text';
import styles from './styles';

type Props = {};

const Empty: React.FC<Props> = () => {
  return (
    <View style={[styles.center]}>
      <Text>NO DATA</Text>
    </View>
  );
};

export default Empty;
