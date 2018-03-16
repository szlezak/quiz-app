import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {
    fontSize: 20,
    color: 'blue',
  },
});

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='blue'/>
    </View>
  );
};
