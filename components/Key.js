import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';



export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.props.echoSymbol(this.props.symbol);  
  }
  
  render() {
    return (
      <TouchableOpacity
        style={this.props.op ? [styles.key, styles.opkey] : styles.key}   //조건에 따라 두 식 중 하나를 반환합니다. 조건부(삼항) 연산자(?:)
        onPress={this._onPress}>
        <View>      
          <Text style={[styles.keytext, this.props.op && styles.opkeytext]}>
            {this.props.symbol}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  key: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2f95dc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,    
  },
  keytext: {
    fontSize: 20,
    color: '#2f95dc'
  },
  opkey: {
    // backgroundColor: '#4f9a94',
    marginRight: 10,
  },
  opkeytext: {
    color: '#2f95dc',
  },
});
