import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Button from '../componets/Button';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.stromboli,
  },
  topWrap: {
    flex: 1,
  },
  bottomWrap: {
    flex: 2,
    backgroundColor: colors.greenSpring,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    position: 'relative',
  },
  iconCircle: {
    backgroundColor: colors.rioGrande,
    position: 'absolute',
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: colors.white,
    top: -75,
  },
  icon: {
    fontSize: 70,
    color: colors.white,
    top: 35,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    color: colors.white,
    textAlign: 'center',
  },
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
  titleWrap: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

class WelcomeScreen extends Component {
  onQuizStart = () => {
    const { navigation } = this.props;
    navigation.navigate('Quiz');
  }

  onShowList = () => {
    console.log('onShowList');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrap} />
        <View style={styles.bottomWrap}>
          <View style={styles.iconCircle}>
            <FontAwesome style={styles.icon}>{Icons.lightbulbO}</FontAwesome>
          </View>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Welcome to Quiz Application</Text>
          </View>
          <View style={styles.buttonWrap}>
            <Button title="Start Quiz" onPress={this.onQuizStart} />
            <Button title="Show List" onPress={this.onShowList} />
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
