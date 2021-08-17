import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as transactionActions from 'app/store/actions/transactionActions';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  // const onLogout = () => dispatch(transactionActions.logOut());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
