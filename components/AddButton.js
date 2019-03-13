import React, {Component} from 'react';
import {TouchableHighlight, View, Image} from "react-native";
import {LinearGradient} from 'expo'
import Icon from '@expo/vector-icons/FontAwesome';

class AddButton extends Component {

render() {
    return (
     <View>
     <LinearGradient 
      colors={['#F6AE60', '#F58C5C']}
      start={[0, 1]}
      style={{borderRadius: 70,}}
      >
        <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 0,
                width: 50,
                height: 50,
              	}}
                >
				<Image
        source={require('./icons/plus.png')} style={{width: 22, height: 21,}}
      />
        </View>
      </LinearGradient>
      </View>
        );
    }
}
export default AddButton;