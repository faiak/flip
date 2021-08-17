import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { colors } from 'app/config/styles';
import { Text } from 'app/components';

const TransactionHeader: React.FC = ({}) => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapViewLeftContent}>
          <View style={styles.wrapViewIcSearch}>
            <Icon name="magnifier" size={18} color={colors.COLOR_GREY} />
          </View>
          <View>
            <TextInput
              style={text ? styles.input : {}}
              onChangeText={onChangeText}
              value={text}
              placeholder="Cari nama, bank atau nominal"
            />
            {/* <Text style={styles.textMediumGrey}>
              Cari nama, bank, atau nominal
            </Text> */}
          </View>
        </View>
        <TouchableOpacity style={styles.wrapViewRightContent}>
          <View style={styles.wrapTextSort}>
            <Text
              style={styles.textBoldOrange}
              color={colors.COLOR_ORANGE}
              type="bold">
              Urutkan xxxxxx
            </Text>
          </View>
          <IconFeather
            name="chevron-down"
            size={24}
            color={colors.COLOR_ORANGE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionHeader;
