import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: colors.gray,
    flex: 1,
  },
  wrapper: {
    alignSelf: 'stretch',
    flex: 1,
    margin: 10,
  },
  questionContainer: {
    backgroundColor: colors.mildGray,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    padding: 10,
  },
  questionText: {
    color: colors.mineShaft,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  answerContainer: {
    backgroundColor: colors.nutBrown,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flex: 3,
    padding: 20,
  },
  answerText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'justify',
  },
  errorText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

class LanguageQuestionListScreen extends Component {
  renderQuestion(question) {
    const { answerText, questionText } = question;

    return (
      <View style={styles.wrapper} key={questionText}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{questionText}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{`${answerText}`}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state || {};
    const { questions } = params || {};

    if(!questions) {
      return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <Text style={styles.errorText}>
            There are no questions for this programming language.
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {questions.map(question =>
          this.renderQuestion(question)
        )}
      </ScrollView>
    );
  }
}

export default LanguageQuestionListScreen;
