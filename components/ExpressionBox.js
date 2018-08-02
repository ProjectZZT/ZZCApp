import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class ExpressionBox extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <TextInput allowFontScaling={true} editable={false} multiline={true} style={styles.expressionbox}>{this.props.expression}</TextInput>
      );
  }
}

const styles = StyleSheet.create({
  expressionbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff',
    fontSize: 52,
    textAlign: 'right',
    color: '#2171b3',
    marginTop: 30
  }
});
