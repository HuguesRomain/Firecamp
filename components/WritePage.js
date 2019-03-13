import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class Write extends Component {
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

export default Write;