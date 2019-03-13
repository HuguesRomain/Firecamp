import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {SafeAreaView, Text} from 'react-native';

class Write extends Component {

  static navigationOptions = {
    title: "Profile", 
  }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Write</Text>
            </SafeAreaView>
        );
    }
}

export default StackNavigationProfile = createStackNavigator({
  Write: {
  screen: Write,
},
})