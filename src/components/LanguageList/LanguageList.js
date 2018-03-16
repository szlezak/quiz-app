import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { colors } from '../../constants/colors';
import LanguageListItem from './LanguageListItem';
import { questions } from '../../../mock-data/mockQuestions';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',//colors.darkGray,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
});

class LanguageList extends Component {
  render() {
    const { navigation, languageList } = this.props;

    return (
      <ScrollView
        style={styles.wrapper}
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
    );
  }
}

export default LanguageList;
