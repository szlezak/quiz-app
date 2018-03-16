import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../constants/colors';
import Accordion from 'react-native-collapsible/Accordion';
import Button from '../components/common/Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',//colors.darkGray,
    flex: 1,
    alignSelf: 'stretch',
  },
  wrapper: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',//colors.white,
  },
  questionText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',//colors.white,
  },
  answerText: {
    fontSize: 16,
    color: '#757575',//colors.white,
    textAlign: 'justify',
  },
  errorText: {
    fontSize: 16,
    color: '#757575',//colors.white,
    textAlign: 'center',
  },
});

class LanguageQuestionListScreen extends Component {
  renderQuestion(question) {
    const { answerText, questionText } = question;

    return (
      <View style={styles.wrapper} key={questionText}>
        <Text style={styles.questionText}>{questionText}</Text>
        <Text style={styles.answerText}>{`\u2022 ${answerText} \u2022`}</Text>
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
        {
          questions.map(question =>
            this.renderQuestion(question)
          )
        }
      </ScrollView>
    );
  }
}

export default LanguageQuestionListScreen;
