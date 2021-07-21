import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Onboarding from 'react-native-onboarding-swiper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)"
  return(
    <View style={{
      width: 6,
      height: 6,
      marginHorizontal: 3,
      backgroundColor,
      borderRadius: 100,
    }} />
  )
}

const skip = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16, color: '#fff' }}>Skip</Text>
    </TouchableOpacity>
  );
};
const next = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16, color: '#fff' }}>Next</Text>
    </TouchableOpacity>
  );
};
const done = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16, color: '#fff' }}>Done</Text>
    </TouchableOpacity>
  );
};

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={skip}
      NextButtonComponent={next}
      DoneButtonComponent={done}
      DotComponent={dots}
      onDone={() => navigation.navigate('Login')}
      onSkip={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#039BE5',
          image: <Image source={require('../assets/snack-icon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#FFEB3B',
          image: <Image source={require('../assets/snack-icon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#4CAF50',
          image: <Image source={require('../assets/snack-icon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
