import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomNav from './BottomNav'
import {createStackNavigator} from 'react-navigation'
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex: 1}}>
      <Nav />
      </View>
    );
  }
}