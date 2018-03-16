import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.white} />
    </View>
  );
};
