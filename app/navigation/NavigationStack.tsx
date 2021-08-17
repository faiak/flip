import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import TransactionList from 'app/screens/TransactionList';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/transaction';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

interface IState {
  // loginReducer: ILoginState;
}

interface IProps {}

const App: React.FC<IProps> = (props: IProps) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />

      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="TransactionList"
          component={TransactionList}
          options={
            {
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
            }
          }
        />
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
