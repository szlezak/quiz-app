import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/common/Button';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#34675C',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: '#ffffff',
    marginBottom: 100,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF'
  },
  upperBox: {
    flex: 1,
    zIndex: 2,
  },
  lowerBox: {
    flex: 2,
    backgroundColor: '#B7B8B6',
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
    zIndex: 3,
  },
  icon: {
    position: 'absolute',
    top: -75,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#ffffff',
    borderRadius: 150,
    backgroundColor: '#b3c100',
    width: 150,
    height: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
})

class WelcomeScreen extends Component {
  handleQuizPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Quiz');
  }

  handleListPress = () => {
    const { navigation } = this.props;

    navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.upperBox}/>
        <View style={styles.lowerBox}>
          <View style={styles.icon}>
            <FontAwesome style={{fontSize: 60, color: '#ffffff'}}>
              {Icons.lightbulbO}
            </FontAwesome>
          </View>
          <View style={{ marginTop: 90 }}>
            <Text style={styles.title}>Welcome to the application</Text>
            <Button text='Start Quiz' onPress={this.handleQuizPress} />
            <Button text='Show List' onPress={this.handleListPress} />
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
