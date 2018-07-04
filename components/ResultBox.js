import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ResultBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text style={styles.resultbox}>{this.props.result}</Text>
      )
  }
}

const styles = StyleSheet.create({
  resultbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff',
    fontSize: 26,
    textAlign: 'center',
    color: '#2f95dc',
  },
});
