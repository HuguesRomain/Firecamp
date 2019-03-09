import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import {Profiles} from './components/Profiles'

const Navigation = createBottomTabNavigator({
  Profiles: {
    screen: Profiles
  },
},{
  tabBarOptions: {
  activeBackgroundColor: "#F16E00",
     style: {
    backgroundColor: 'rgba(189, 195, 199, 1)',
     },
     labelStyle: {
      fontSize: 20,
    },
  },
  
})

const Nav = createAppContainer(Navigation)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
