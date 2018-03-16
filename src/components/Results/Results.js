import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';

import Button from '../common/Button';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 25,
    marginBottom: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#c12713',
  },
  buttonText: {
    color: '#c12713',
    fontSize: 22,
    fontWeight: '700',
  },
  bottomBox: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  totalCountText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

  getBackgroundColor = goodAnswersCount => goodAnswersCount > 4 ? colors.winningGreen : colors.loosingRed;

  getTitle = goodAnswersCount => goodAnswersCount > 4 ? 'Weeeeeeeeej' : 'Booooooooooo';

  handlePress = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate('Welcome');
  }

  render() {
    const { answerList, total } = this.props;
    const goodAnswersCount = this.countGoodAnswers();

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: this.getBackgroundColor(goodAnswersCount) }} />
        <View style={styles.bottomBox}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.getTitle(goodAnswersCount)}</Text>
            <Text style={styles.totalCountTextz}>{`You have answered ${goodAnswersCount} out of ${total} questions right`}</Text>
          </View>
            <TouchableOpacity
              style={[styles.button, { borderColor: this.getBackgroundColor(goodAnswersCount)}]}
              onPress={this.handlePress}
              activeOpacity={0.7}
            >
              <Text style={[styles.buttonText, {color: this.getBackgroundColor(goodAnswersCount)}]}>Try again</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Results;
