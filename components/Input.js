import React, {Component} from 'react'; 
import {TextInput, StyleSheet} from 'react-native'

const BASE_SIZE = 14; 
const COLOR_BACKGROUND = "#F8F8F8"
const BORDER_RADIUS = 14.5;



export default class Input extends Component {
  render () {
    const {style, ...props} = this.props
    return (
      <TextInput style={styles.input} {...this.props}/>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: BASE_SIZE * 2,
    width: BASE_SIZE * 4,
    borderRadius: BASE_SIZE * 2,
    shadowColor: '#C6C6C6',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 1 },
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: COLOR_BACKGROUND,
  }
})

