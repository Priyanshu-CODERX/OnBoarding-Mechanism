import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import Constants from 'expo-constants';

export default function Login({navigation}) {
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Login Screen</Text>
      <Button title="Back" onPress={() => alert("Yahooo Logged In")}/>
    </View>
  )
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
})