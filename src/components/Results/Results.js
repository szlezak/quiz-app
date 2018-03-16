import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';

import Button from '../common/Button';

const styles = StyleSheet.create({
});

class Results extends Component {
  countGoodAnswers = () => {
    const { answerList } = this.props;
    let goodAnswers = [];
    if (answerList) {
      goodAnswers = answerList.filter(answer => answer);
    }
    return goodAnswers.length;
  }

  handlePress = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate('Welcome');
  }

  render() {
    const { answerList, total } = this.props;
// 5d9121
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#c12713' }} />
        <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
            <Text style={{ textAlign: 'center', fontSize: 40, color: 'rgba(0, 0, 0, 0.8)' }}>Hoooo</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, color: 'rgba(0, 0, 0, 0.6)'  }}>{`You have answered ${this.countGoodAnswers()} out of ${total} questions right`}</Text>
          </View>
            <TouchableOpacity
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                paddingVertical: 15,
                marginHorizontal: 25,
                marginBottom: 30,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#c12713',
              }}
              onPress={this.handlePress}
              activeOpacity={0.7}
            >
              <Text style={{ color: '#c12713', fontSize: 22, fontWeight: '700' }}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Results;
