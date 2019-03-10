import React, {Component} from 'react';
import {TouchableHighlight, View, Image} from "react-native";
import {LinearGradient} from 'expo'

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
				<Image
        source={require('./icons/plus.png')} style={{width: 22, height: 21,}}
      />
        </TouchableHighlight>
      </View>
        );
    }
}
export {AddButton};