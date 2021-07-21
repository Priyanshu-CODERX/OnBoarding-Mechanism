import { Text, View, Image } from 'react-native';
import * as React from 'react';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Onboarding from 'react-native-onboarding-swiper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './screens/Onboarding';
import Login from './screens/Login';

import AsyncStorage from '@react-native-community/async-storage'

const stack = createStackNavigator();

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value=> {
      if(value==null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, [])

  if(isFirstLaunch == null) {
    return (null)
  } else if (isFirstLaunch == true) {
    return(
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          <stack.Screen name="Onboarding" component={OnBoarding} />
          <stack.Screen name="Login" component={Login} />
        </stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (<Login/>);
  }
}