import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../common/Button';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
});

class LanguageListItem extends Component {
  handlePress = () => {
    const { language, navigation, questions } = this.props;

    navigation.navigate('LanguageQuestions', { title: language, questions });
  }

  render() {
    const { language } = this.props;

    return (
      <View style={styles.wrapper}>
        <Button
          text={language}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

export default LanguageListItem;
