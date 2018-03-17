import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import CheckBox from 'react-native-check-box';

import Answer from './Answer';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.stromboli,
  },
  backgroundWrap: {
    flex: 1,
    backgroundColor: colors.pumic,
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  contentWrap: {
    flex: 2,
    backgroundColor: colors.greenSpring,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30,
  },
  progress: {
    backgroundColor: colors.white,
    width: 80,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  quizState: {
    fontSize: 20,
    position: 'absolute',
    top: 38,
    fontWeight: '700',
  },
});

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionIndex: 0,
    };
  }

  onAnwerPress = () => {
    const { questionIndex } = this.state;
    const { questions } = this.props;

    const updatedQuestionIndex = questionIndex + 1;

    if (updatedQuestionIndex === questions.length) {
      return null;
    }

    this.setState({ questionIndex: updatedQuestionIndex })
  }

  render() {
    const { questions } = this.props;
    const { questionIndex } = this.state;

    const question = questions[questionIndex];
    const total = questions.length;
    const currentQuestion = questionIndex + 1;
    const propresState = currentQuestion/total;

    return (
      <View style={styles.wrap}>
        <View style={styles.backgroundWrap}>
          <Progress.Circle
            size={80}
            borderWidth={0}
            thickness={9}
            color={colors.rioGrande}
            progress={propresState}
            style={styles.progress}
          />
          <Text style={styles.quizState}>{`${currentQuestion}/${total}`}</Text>
          <Text style={styles.title}>{question.title}</Text>
        </View>
        <View style={styles.contentWrap}>
          {question.options.map((option, index)=> {
            const { title, isRight } = option || {};
            return <Answer questionTitle={question.title} title={title} isRight={isRight} onAnwerPress={this.onAnwerPress} />;
          })}
        </View>
      </View>
    );
  }
}

export default Quiz;
