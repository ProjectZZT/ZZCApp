import React from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import Key from './Key.js'
import Swiper from 'react-native-swiper';           //swipe modules url:  https://www.npmjs.com/package/react-native-swiper
  


export default class NumPad extends React.Component {
  constructor(props) {
    super(props);
    this._echoSymbol = this._echoSymbol.bind(this)
  }


  _echoSymbol(symbol) {
    if (symbol === '=') {
      this.props.calculateResult();
    } else if (symbol === 'DEL') {
      this.props.deletePressed();
    } else if (symbol === 'AC') { 
        this.props.deletePressedAll();
    } else {
      this.props.assembleExpression(symbol);
    } 
  }

  render() {
    return (
      <View style={styles.numpad}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollgroup}>
          <Key op={true} symbol={" m "} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={"kg"} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={" s "} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={" A "} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={" K "} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={"mol"} echoSymbol={this._echoSymbol} />
          <Key op={true} symbol={"cd"} echoSymbol={this._echoSymbol} />
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollgroup}>
            <Key op={true} symbol={"+"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"-"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"*"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"/"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"^"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"sqrt"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"("} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={")"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"log"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"pi"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"sin"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"cos"} echoSymbol={this._echoSymbol} />
            <Key op={true} symbol={"tan"} echoSymbol={this._echoSymbol} />
          </ScrollView>
          
              <View style={styles.numgroup}>          
                <Key symbol={'1'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'2'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'3'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'0'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'AC'} echoSymbol={this._echoSymbol}/>
              </View>
              <View style={styles.numgroup}>
                <Key symbol={'4'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'5'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'6'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'00'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'DEL'} echoSymbol={this._echoSymbol}/>
              </View>
              <View style={styles.numgroup}>
                <Key symbol={'7'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'8'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'9'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'.'} echoSymbol={this._echoSymbol}/>
                <Key symbol={'='} echoSymbol={this._echoSymbol}/>
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  numpad: {
    flex: 3,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#fff',
    marginBottom: 30
  },
  numgroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scrollgroup: {
    flex: 1
  },
  onkey: {
    borderRadius: 5,
    backgroundColor: '#2f95dc',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2f95dc',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  onkeytext: {
    fontSize: 20,
    color: '#ffffff'
  },
  slide1: {
    flex: 1,
    justifyContent: 'space-between',
  },
  slide2: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
