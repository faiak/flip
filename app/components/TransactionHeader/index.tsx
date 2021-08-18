import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { colors } from 'app/config/styles';
import { Text, Modal } from 'app/components';
import { SortByType } from 'app/models/reducers/transaction';
import {
  searchTransactions,
  sortTransactions,
} from 'app/store/actions/transactionActions';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'app/store/selectors/transactionSelectors';
import { IRootState } from 'app/store';

const TransactionHeader: React.FC = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const keyword = useSelector((state: IRootState) =>
    transactionSelectors.getKeyword(state),
  );
  const sortBy = useSelector((state: IRootState) =>
    transactionSelectors.getSortBy(state),
  );
  const onChangeText = (value: string) => {
    dispatch(searchTransactions(value));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapViewLeftContent}>
          <View style={styles.wrapViewIcSearch}>
            <Icon name="magnifier" size={18} color={colors.COLOR_GREY} />
          </View>
          <View>
            <TextInput
              style={keyword ? styles.input : {}}
              onChangeText={onChangeText}
              value={keyword}
              placeholder="Cari nama, bank atau nominal"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.wrapViewRightContent}
          onPress={() => setModalVisible(true)}>
          <Text
            wrapperStyle={styles.wrapTextSort}
            style={styles.textBoldOrange}
            color={colors.COLOR_ORANGE}
            type="bold">
            Urutkan
          </Text>
          <IconFeather
            name="chevron-down"
            size={24}
            color={colors.COLOR_ORANGE}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        selected={sortBy}
        onPress={(selectedSort: SortByType) => {
          setModalVisible(false);
          if (selectedSort !== undefined && selectedSort !== null) {
            dispatch(sortTransactions(selectedSort));
          }
        }}
      />
    </View>
  );
};

export default TransactionHeader;
