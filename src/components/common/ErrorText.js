import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#B7B8B6',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default ErrorText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
