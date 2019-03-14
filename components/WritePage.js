import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {SafeAreaView, Text} from 'react-native';
import Input from './Input'

class Write extends Component {

  static navigationOptions = {
    title: "Write", 
  }
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Write</Text>
                <Input placeholder='Input'/>
            </SafeAreaView>
        );
    }
}

export default StackNavigationProfile = createStackNavigator({
  Write: {
  screen: Write,
},
})