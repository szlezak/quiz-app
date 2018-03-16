import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Quiz from '../components/Quiz/Quiz';
import { questions } from '../../mock-data/mockQuestions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class QuizScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Quiz questions={questions} navigation={navigation} />
      </View>
    );
  }
}

export default QuizScreen;
