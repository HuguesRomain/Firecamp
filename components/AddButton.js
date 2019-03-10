import React, {Component} from 'react';
import {Animated, TouchableHighlight, View} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
class AddButton extends Component {
render() {
    return (
     <View>
        <TouchableHighlight
          onPress={this.toggleView}
            underlayColor="white"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 46,
                height: 46,
                borderRadius: 70,
                backgroundColor: 'black'
              	}}
                >
    		<Icon name="plus" size={24} color="white"/>
        </TouchableHighlight>
      </View>
        );
    }
}
export {AddButton};