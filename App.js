import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import PasswordRecover from './screens/PasswordRecover';
import PasswordRecoverResult from './screens/PasswordRecoverResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          options={{title: ''}}
          name="ForgotPassword"
          component={PasswordRecover}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPasswordResult"
          component={PasswordRecoverResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
