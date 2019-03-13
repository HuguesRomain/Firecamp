import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {SafeAreaView, Text} from 'react-native';

class Profile extends Component {

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
                <Text>Profile</Text>
            </SafeAreaView>
        );
    }
}

export default StackNavigationProfile = createStackNavigator({
    Profile: {
    screen: Profile,
  },
  })
