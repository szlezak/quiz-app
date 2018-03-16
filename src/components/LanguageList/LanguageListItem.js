import React, { Component } from 'react';
import Button from '../common/Button';

class LanguageListItem extends Component {
  handlePress = () => {
    const { language, navigation, questions } = this.props;
    navigation.navigate('LanguageQuestions', { title: language, questions });
  }

  render() {
    const { language } = this.props;

    return (
      <Button
        text={language}
        onPress={this.handlePress}
      />
    );
  }
}

export default LanguageListItem;
