import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    marginHorizontal: 20,
    backgroundColor: colors.rioGrande,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 22,
  },
});

class Button extends Component {
  render() {
    const { onPress, title } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
