import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import Answer from './Answer';
import Results from '../Results/Results';

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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#34675C' }} />
        <View style={{ flex: 2, backgroundColor: '#B7B8B6', position: 'relative', paddingTop: 130}}>
          <View style={{ backgroundColor: '#D3D4D3', marginHorizontal: 10, borderRadius: 5, position: 'absolute', left: 0, right: 0, top: -100, height: 200, alignItems: 'center', justifyContent: 'center'}}>
            <Progress.Circle progress={progress} style={{ position: 'absolute', top: -40, backgroundColor: '#ffff', borderRadius: 50,  }} borderWidth={0} color={'#b3c100'} size={ 80 } thickness={6} />
            <Text style={{ position: 'absolute', top: -10, fontSize: 20, fontWeight: 'bold' }}>{`${progressIndex}/${total}`}</Text>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>{title}</Text>
          </View>

      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
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
      <View style={{ flex: 1 }}>
        {this.renderQuestion()}
      </View>
    );
  }
}

export default Quiz;
