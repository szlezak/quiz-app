import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
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
    marginBottom: 130,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF'
  }
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
        <View style={{ flex: 1 }} />
        <View style={{ flex: 2, backgroundColor: '#B7B8B6', marginHorizontal: 10, borderRadius: 5, marginBottom: 10}}>
          <View style={{ position: "absolute", top: -75, alignSelf: 'center', borderWidth: 5, borderColor: '#ffffff', borderRadius: 150, backgroundColor: '#b3c100', width: 150, height: 150, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Icon</Text>
          </View>
          <View style={{ marginTop: 90 }}>
            <Text style={styles.title}>Welcome to the application</Text>
            <TouchableOpacity
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                paddingVertical: 15,
                marginHorizontal: 25,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#ffffff',
                backgroundColor: '#b3c100',
              }}
              onPress={this.handleQuizPress}
              activeOpacity={0.7}
            >
              <Text style={{ color: '#ffffff', fontSize: 22 }}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                paddingVertical: 15,
                marginHorizontal: 25,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#ffffff',
                backgroundColor: '#b3c100',
              }}
              onPress={this.handleListPress}
              activeOpacity={0.7}
            >
              <Text style={{ color: '#ffffff', fontSize: 22 }}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
