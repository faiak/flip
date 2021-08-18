import { colors } from 'app/config/styles';
import React from 'react';
import {
  View,
  Modal as BaseModal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { SortByType } from 'app/models/reducers/transaction';

type Props = {
  visible: boolean;
  onPress: Function;
  selected: SortByType;
};

const Modal: React.FC<Props> = ({ visible, onPress, selected }) => {
  const list: { [id: number]: string } = {
    [SortByType.DEFAULT]: 'URUTKAN',
    [SortByType.NAME_ASC]: 'Nama A-Z',
    [SortByType.NAME_DESC]: 'Nama Z-A',
    [SortByType.DATE_DESC]: 'Tanggal Terbaru',
    [SortByType.DATE_ASC]: 'Tanggal Terlama',
  };

  return (
    <BaseModal
      animationType="fade"
      transparent={visible}
      visible={visible}
      onRequestClose={() => onPress()}>
      <Pressable style={styles.modalClose} onPress={() => onPress()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {Object.keys(list).map((key, index) => {
              const keyNum = Number(key);
              return (
                <TouchableOpacity
                  onPress={() => {
                    onPress(key);
                  }}
                  key={`${index}_${list[keyNum]}`}
                  style={styles.modalContent}>
                  <Icon
                    name={
                      keyNum === Number(selected)
                        ? 'radio-button-checked'
                        : 'radio-button-off'
                    }
                    size={20}
                    color={colors.COLOR_ORANGE}
                  />

                  <Text
                    size={14}
                    wrapperStyle={styles.wrapTextModal}
                    color={colors.COLOR_BLACK_TWO}>
                    {list[keyNum]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Pressable>
    </BaseModal>
  );
};

export default Modal;
