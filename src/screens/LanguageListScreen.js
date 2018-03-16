import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import LanguageList from '../components/LanguageList/LanguageList';
import Loader from '../components/common/Loader';
import ErrorText from '../components/common/ErrorText';
import { getLanguageList } from '../../mock-data/mockLanguages';

class LanguageListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      languageList: [],
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });

    getLanguageList().then(response => {
      this.setState({ isFetching: false, languageList: response });
    });
  }

  render() {
    const { navigation } = this.props;
    const { isFetching, languageList } = this.state;

    if (isFetching) {
      return <Loader />;
    }

    if (!languageList.length) {
      return <ErrorText text='No data' />;
    }

    return <LanguageList languageList={languageList} navigation={navigation} />;
  }
}

export default LanguageListScreen;
