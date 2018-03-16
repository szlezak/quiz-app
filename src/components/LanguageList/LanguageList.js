import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { colors } from '../../constants/colors';
import LanguageListItem from './LanguageListItem';
import { questions } from '../../../mock-data/mockQuestions';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  list: {
    marginTop: 20,
  },
});

class LanguageList extends Component {
  render() {
    const { navigation, languageList } = this.props;

    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.content}
        >
          {languageList.map((language, index) =>
            <LanguageListItem
              key={language.name}
              language={language.name}
              navigation={navigation}
              questions={language.questions}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

export default LanguageList;
