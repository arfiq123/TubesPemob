import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen';
import LoginMenu from './LoginMenu';
import RegistrationMenu from './RegistrationMenu';
import Voucher from './Voucher';
import Profile from './Profile';
import MobileLegend from './MobileLegend';
import Bayar from './Bayar';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginMenu">
        <Stack.Screen name="LoginMenu" component={LoginMenu} />
        <Stack.Screen name="RegistrationMenu" component={RegistrationMenu} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MobileLegend" component={MobileLegend} />
        <Stack.Screen name="Bayar" component={Bayar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

