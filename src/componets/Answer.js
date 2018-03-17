import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import CheckBox from 'react-native-check-box';

import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  answer: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  answerText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
  },
});

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  componentWillReceiveProps(nextPros) {
    const { questionTitle } = this.props;
    const { questionTitle: nextQuestionTitle } = nextPros;

    if (questionTitle !== nextQuestionTitle) {
      this.setState({ checked: false });
    }

    return null;
  }

  onPress = () => {
    const { onAnwerPress } = this.props;
    const { checked } = this.state;

    this.setState({ checked: !checked });

    setTimeout(() => onAnwerPress(), 800);
  }

  getAnswerCustomStyle = () => {
    const { checked } = this.state;
    const { isRight } = this.props;
console.log(isRight)
    if (checked && isRight) {
      return 'green';
    }

    if (checked && !isRight) {
      return 'red';
    }

    return colors.pottersClay;
  }

  render() {
    const { isRight, title } = this.props;
    const { checked } = this.state;

    return (
      <CheckBox
        style={[styles.answer, { backgroundColor: this.getAnswerCustomStyle() }]}
        leftTextStyle={styles.answerText}
        onClick={this.onPress}
        isChecked={checked}
        leftText={title}
        checkedImage={<Text />}
        unCheckedImage={<Text />}
      />
    );
  }
}

export default Answer;

