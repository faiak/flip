import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import TransactionList from 'app/screens/TransactionList';
import TransactionDetail from 'app/screens/TransactionDetail';

import { StatusBar } from 'react-native';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { id: string };
};
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name="TransactionList"
          component={TransactionList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetail}
          options={{ title: 'Detail Transaksi' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
