import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#03A9F4',//colors.anotherGreen,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',//colors.white,
  },
});

class Button extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
