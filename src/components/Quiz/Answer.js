import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box'

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
});

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { option } = this.props;
    const { title } = option;
    const { option: nextOption } = nextProps;
    const { title: nextTitle } = nextOption;

    if (nextTitle && title !== nextTitle) {
      this.setState({ isChecked: false });
    }
  }

  getBackgroundColor = isRight => {
    const { isChecked } = this.state;

    if(isChecked && isRight) {
      return 'green';
    }

    if (isChecked && !isRight) {
      return 'red';
    }

    return '#8f6a33';
  }

  handlePress = () => {
    const { isChecked } = this.state;
    const { handleNextQuestion, handleAnswer, option } = this.props;
    const { isRight } = option;

    this.setState({ isChecked: !isChecked });

    handleAnswer(isRight);
    setTimeout(() => handleNextQuestion(), 800);
  }

  render() {
    const { isChecked } = this.state;
    const { option } = this.props;
    const { title, isRight } = option;

    return (
      <CheckBox
        style={{backgroundColor: this.getBackgroundColor(isRight), borderRadius: 5, width: 150, height: 150, margin: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, paddingRight: 10 }}
        onClick={this.handlePress}
        isChecked={isChecked}
        rightText={title}
        rightTextStyle={{ color: '#ffffff', textAlign: 'center', fontSize: 18 }}
        unCheckedImage={<Text />}
        checkedImage={<Text />}
      />
    );
  }
}
export default Answer;
