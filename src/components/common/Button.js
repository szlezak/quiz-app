import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.lightGreen,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 25,
    marginVertical: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 22
  },
});

class Button extends Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
