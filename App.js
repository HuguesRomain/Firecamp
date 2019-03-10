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
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
          ),
      }),
  },

  Adding: {
    screen: () => null, 
    navigationOptions: () => ({
        tabBarIcon: <AddButton /> 
    })
  },

  Profile: {
    screen: Profile, 
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Image source={require('./components/icons/user.png')} style={{width: 24, height: 24,}}/>
      ), 
    }) 
  },
}, {
  tabBarOptions: {
    showLabel: false, 
    activeTintColor: '#F8F8F8', 
    inactiveTintColor: '#586589',
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
