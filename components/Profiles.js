import React from 'react'; 
import {View, TextInput} from 'react-native'

class Profiles extends React.Component {
  render() {
    return(
      <View>
       <TextInput
       placeholder={"Paris"}
      />  
      <Button color='red' title="Research city"/>
      </View>
    );
  }
}

export default Profiles