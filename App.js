import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Home} from './components/Home'
import {Profile} from './components/Profiles'
import {AddButton} from './components/AddButton'

const BaseNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
        tabBarLabel: '•', 
        tabBarIcon: () => (
            <Image source={require('./components/icons/home.png')} 
                  style={{width: 27, height: 27,}} 
                  />
          ),
      }),
  },

  Adding: {
    screen: () => null, 
    navigationOptions: () => ({
        tabBarLabel: ' ',
        tabBarIcon: <AddButton /> 
    })
  },

  Profile: {
    screen: Profile, 
    navigationOptions: () => ({
      tabBarLabel: '•',
      tabBarIcon: () => (
        <Image source={require('./components/icons/user.png')} style={{width: 24, height: 24,}}/>
      ), 
    }) 
  },
}, {
  tabBarOptions: {
    showLabel: true, 
    labelStyle: {fontSize: 17, marginTop: -10,},
    activeTintColor: 'black', 
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#FFFFFF'
    }
  }
})

const Nav = createAppContainer(BaseNavigator)


export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex: 1}}>
      <Nav />
      </View>
    );
  }
}
