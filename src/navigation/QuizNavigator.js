import { StackNavigator } from 'react-navigation';
import React from 'react';

import WelcomeScreen from '../screens/WelcomeScreen';
import QuizScreen from '../screens/QuizScreen';
import LanguageQuestionListScreen from '../screens/LanguageQuestionListScreen';
import LanguageListScreen from '../screens/LanguageListScreen';

export const QuizNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Quiz: {
    screen: QuizScreen,
    navigationOptions: {
      header: null,
    },
  },
  List: {
    screen: LanguageListScreen,
    navigationOptions: {
      header: null,
    },
  },
  LanguageQuestions: {
    screen: LanguageQuestionListScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});
