import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Quiz from '../componets/Quiz';
import { questions } from '../../mock-data/mockQuestions';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

class QuizSceen extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Quiz questions={questions} />
      </View>
    );
  }
}

export default QuizSceen;
