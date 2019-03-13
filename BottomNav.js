import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Home from './components/Home'
import Profile from './components/Profiles'
import Write from './components/WritePage'
import AddButton from './components/AddButton'

const BottomNav = createBottomTabNavigator({
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
    screen: Write, 
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
},  {
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

export default Nav = createAppContainer(BottomNav); 

