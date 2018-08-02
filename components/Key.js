import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
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
    var { height, width } = Dimensions.get('window');
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
    // borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, alignSelf: 'stretch', width: '99%', height: '99%',
    backgroundColor: '#fff',
    // marginLeft: 0.5,
    // marginRight: 0.5,
  },
  keytext: {
    fontSize: 20,
    color: '#808080'
  },
  opkey: {
    // borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, alignSelf: 'stretch', width: '99%', height: '99%',
    backgroundColor: '#fff',
    // marginLeft: 0.5,
    // marginRight: 0.5,
    marginBottom: 20,
  },
  opkeytext: {
    color: '#2171b3',
  },
});
