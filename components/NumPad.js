import React from "react";
import { View, ScrollView, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import Key from "./Key.js";
import Swiper from "react-native-swiper"; //swipe modules url:  https://www.npmjs.com/package/react-native-swiper

export default class NumPad extends React.Component {
  constructor(props) {
    super(props);
    this._echoSymbol = this._echoSymbol.bind(this);
  }

  _echoSymbol(symbol) {
    if (symbol === "=") {
      this.props.calculateResult();
    } else if (symbol === "DEL") {
      this.props.deletePressed();
    } else if (symbol === "AC") {
      this.props.deletePressedAll();
    } else if (symbol === "SAVE") {
      this.props.saveexpression();
    } else {
      if (symbol === "√") {
        symbol = symbol.replace("√", "√(");
        this.props.assembleExpression(symbol);
      } else if (symbol === "log") {
        symbol = symbol.replace("log", "log(");
        this.props.assembleExpression(symbol);
      } else if (symbol === "sin") {
        symbol = symbol.replace("sin", "sin(");
        this.props.assembleExpression(symbol);
      } else if (symbol === "cos") {
        symbol = symbol.replace("cos", "cos(");
        this.props.assembleExpression(symbol);
      } else if (symbol === "tan") {
        symbol = symbol.replace("tan", "tan(");
        this.props.assembleExpression(symbol);
      } else if (symbol === "m / 길이") {
        symbol = symbol.replace("m / 길이", " m ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "s / 시간") {
        symbol = symbol.replace("s / 시간", " s ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "K / 온도") {
        symbol = symbol.replace("K / 온도", " K ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "A / 전류") {
        symbol = symbol.replace("A / 전류", " A ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "kg / 무게") {
        symbol = symbol.replace("kg / 무게", " kg ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "cd / 광도") {
        symbol = symbol.replace("cd / 광도", " cd ");
        this.props.assembleExpression(symbol);
      } else if (symbol === "mol / 물질량") {
        symbol = symbol.replace("mol / 물질량", " mol ");
        this.props.assembleExpression(symbol);
      } else {
        this.props.assembleExpression(symbol);
      }
    }
  }

  render() {
    return (
      <View style={styles.numpad}>
        <Swiper
          showsButtons={false}
          autoplay={false}
          bounces={true}
          showsPagination={false}
          loop={false}
        >
          <View style={styles.slide1}>
            <View style={styles.numgroup}>
              <Key op={true} symbol={"+"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"-"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"*"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"/"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"^"} echoSymbol={this._echoSymbol} />
            </View>
            <View style={styles.numgroup}>
              <Key op={true} symbol={"sin"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"cos"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"tan"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"("} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={")"} echoSymbol={this._echoSymbol} />
            </View>
            <View style={styles.numgroup}>
              <Key symbol={"1"} echoSymbol={this._echoSymbol} />
              <Key symbol={"2"} echoSymbol={this._echoSymbol} />
              <Key symbol={"3"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"log"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"AC"} echoSymbol={this._echoSymbol} />
            </View>
            <View style={styles.numgroup}>
              <Key symbol={"4"} echoSymbol={this._echoSymbol} />
              <Key symbol={"5"} echoSymbol={this._echoSymbol} />
              <Key symbol={"6"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"√"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"DEL"} echoSymbol={this._echoSymbol} />
            </View>
            <View style={styles.numgroup}>
              <Key symbol={"7"} echoSymbol={this._echoSymbol} />
              <Key symbol={"8"} echoSymbol={this._echoSymbol} />
              <Key symbol={"9"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"π"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={""} echoSymbol={this._echoSymbol} />
            </View>
            <View style={styles.numgroup}>
              <Key symbol={"0"} echoSymbol={this._echoSymbol} />
              <Key symbol={"00"} echoSymbol={this._echoSymbol} />
              <Key symbol={"."} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"SAVE"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"="} echoSymbol={this._echoSymbol} />
            </View>
          </View>
          <View style={styles.slide2}>
            <ScrollView style={styles.scrollgroup}>
              <View style={styles.scrollheader}>
                <Text style={styles.scrollheadertext}>기본 단위</Text>
              </View>
              <Key op={true} symbol={"m / 길이"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"s / 시간"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"K / 온도"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"A / 전류"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"kg / 무게"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"cd / 광도"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"mol / 물질량"} echoSymbol={this._echoSymbol} />
            </ScrollView>

            <ScrollView style={styles.scrollgroup}>
              <View style={styles.scrollheader}>
                <Text style={styles.scrollheadertext}>유도 단위</Text>
              </View>
              <Key op={true} symbol={" ㎐"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" Ν"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" Pa"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" J"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" W"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" C"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" V"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" F"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" Ω"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" S"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"Wb "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" T"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" H"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"Pas "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" Nm"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" N/M"} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"J/K "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" J/kgK "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"W/mK "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"J/㎥ "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"V/m "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"C/㎥ "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"C/㎡ "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"F/m "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={"H/m "} echoSymbol={this._echoSymbol} />
              <Key op={true} symbol={" J/mol"} echoSymbol={this._echoSymbol} />
            </ScrollView>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numpad: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#2171b3",

  },
  numgroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  scrollgroup: {
    flex: 1,
    flexDirection: "column",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#2171b3",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  onkey: {
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000",
    alignItems: "stretch",
    justifyContent: "center",
    width: 60,
    height: 60
  },
  onkeytext: {
    fontSize: 20,
    color: "#ffffff"
  },
  slide1: {
    flex: 1
  },
  slide2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2171b3",
  },
  scrollheader: {
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#2171b3",
    alignItems: 'center',
  },
  scrollheadertext: {
    color: "#2171b3",
  }
});
