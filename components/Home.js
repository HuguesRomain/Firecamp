import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Nav from '../BottomNav'

class Home extends Component {
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


export default Home;