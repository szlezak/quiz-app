import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

import Answer from './Answer';
import Results from '../Results/Results';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperBox: {
    backgroundColor: colors.darkGreen,
    flex: 1,
  },
  lowerBox: {
    backgroundColor: colors.gray,
    flex: 2,
    paddingTop: 130,
    position: 'relative',
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: colors.mildGray,
    borderRadius: 5,
    height: 200,
    justifyContent: 'center',
    left: 0,
    marginHorizontal: 10,
    position: 'absolute',
    right: 0,
    top: -100,
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: -10,
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
  },
  progress: {
    backgroundColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    top: -40,
  },
  answerListContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      answerList: [],
    };
  }

  incrementIndex = () => {
    const { index } = this.state;
    let counter = index + 1;
    this.setState({ index: counter });

    this.renderQuestion();
  }

  handleAnswer = isRight => {
    const { answerList } = this.state;

    this.setState({ answerList: [...answerList, isRight] });
  }

  renderQuestion = () => {
    const { index, answerList } = this.state;
    const { questions, navigation } = this.props;
    const { title, options } = questions[index] || {};
    const progressIndex = index + 1;
    const total = questions.length;
    const progress = (index + 1) / questions.length;

    if (index === questions.length ) {
      return (
        <Results answerList={answerList} total={total} navigation={navigation}/>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.upperBox} />
        <View style={styles.lowerBox}>
          <View style={styles.titleContainer}>
            <ProgressCircle progress={progress} style={styles.progress} borderWidth={0} color={colors.lightGreen} size={ 80 } thickness={6} />
            <Text style={styles.progressText}>{`${progressIndex}/${total}`}</Text>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.answerListContainer}>
            {options.map((option, index) =>{
              return (
                <Answer
                  key={index}
                  index={index}
                  option={option}
                  handleNextQuestion={this.incrementIndex}
                  handleAnswer={this.handleAnswer}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuestion()}
      </View>
    );
  }
}

export default Quiz;
