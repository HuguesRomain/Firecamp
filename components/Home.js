import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Nav from '../BottomNav'
import Profile from './Profiles'
import Write from './WritePage'

class Home extends Component {

  static navigationOptions = {
    title: "Fire", 
  }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home</Text>
            </View>
        );
    }
}


export default StackNavigationHome = createStackNavigator({
  Home: {
  screen: Home,
},
})


