import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { Constants } from "expo";

import SiUnitsBox from "../components/SiUnitsBox";
import ExpressionBox from "../components/ExpressionBox";
import ResultBox from "../components/ResultBox.js";
import NumPad from "../components/NumPad.js";

import Swiper from "react-native-swiper"; //swipe modules url:  https://www.npmjs.com/package/react-native-swiper
// zerozone calculator CalculatorScreen

const math = require("mathjs");

const meter = "(100)";
const kg = "(200)";
const s = "(300)";
const A = "(400)";
const K = "(500)";
const mol = "(600)";
const cd = "(700)";

export default class CalculatorScreen extends React.Component {
  static navigationOptions = {
    header: null //header 부분 감춤
  };

  constructor(props) {
    super(props);
    this.state = {
      lastexpression: [],
      expression: "",
      result: ""
    };

    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
    this._rollbackExpression = this._rollbackExpression.bind(this);
    this._rollbackExpressionAll = this._rollbackExpressionAll.bind(this);
  }

  _rollbackExpression() {
    this.state.expression &&
      this.setState(prevState => ({
        expression: prevState.lastexpression.pop(), //pop() 배열 끝부분 제거
        lastexpression: prevState.lastexpression
      }));
  }

  _rollbackExpressionAll() {
    this.state.expression &&
      this.setState(prevState => ({
        expression: prevState.lastexpression.splice(), //splice() 배열 전체 부분 초기화
        lastexpression: prevState.lastexpression
      }));
  }

  _assembleExpression(symbol) {
    this.setState(prevState => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol
    }));
  }

  _calculateResult() {
    //연산
    let source = this.state.expression.toString();
    let result;
    let si_m, si_kg, si_s, si_A, si_K, si_mol, si_cd;
    try {
      for (let i = 0; i < this.state.expression.length; i++) {
        if (source.indexOf("mol") != -1) {
          source = source.replace("mol", mol);
        } else if (source.indexOf("kg") != -1) {
          source = source.replace("kg", kg);
        } else if (source.indexOf(" s ") != -1) {
          source = source.replace(" s ", s);
        } else if (source.indexOf(" A ") != -1) {
          source = source.replace(" A ", A);
        } else if (source.indexOf(" K ") != -1) {
          source = source.replace(" K ", K);
        } else if (source.indexOf(" m ") != -1) {
          source = source.replace(" m ", meter);
        } else if (source.indexOf("cd") != -1) {
          source = source.replace("cd", cd);
        } else {
          source[i] = this.state.expression[i];
        }
      }

      result = math.eval(source);
      si_m = result * 100 + "m";
      si_kg = result * 200 + "kg";
      si_s = result * 300 + "s";
      si_A = result * 400 + "A";
      si_K = result * 500 + "K";
      si_mol = result * 600 + "mol";
      si_cd = result * 700 + "cd";
    } catch (e) {
      result = "Error";
    }
    this.setState({ result: result });
    this.setState({ si_m: si_m });
    this.setState({ si_kg: si_kg });
    this.setState({ si_s: si_s });
    this.setState({ si_A: si_A });
    this.setState({ si_K: si_K });
    this.setState({ si_mol: si_mol });
    this.setState({ si_cd: si_cd });
  }

  render() {
    return (
      <Swiper
        showsButtons={false}
        autoplay={false}
        bounces={true}
        showsPagination={false}
        loop={false}
      >
        <View style={styles.slide1}>
          <ExpressionBox expression={this.state.expression} />
          <ResultBox result={this.state.result} />
          <NumPad
            assembleExpression={this._assembleExpression}
            calculateResult={this._calculateResult}
            deletePressed={this._rollbackExpression}
            deletePressedAll={this._rollbackExpressionAll}
          />
          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>↓ HistoryView ↓</Text>
          </View>
        </View>
        <View style={styles.slide2}>
          <SiUnitsBox
            si_m={this.state.si_m}
            si_kg={this.state.si_kg}
            si_s={this.state.si_s}
            si_A={this.state.si_A}
            si_K={this.state.si_K}
            si_mol={this.state.si_mol}
            si_cd={this.state.si_cd}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  slide1: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  slide2: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0
  },
  tabBarInfoText: {
    fontSize: 15,
    color: "#2f95dc",
    textAlign: "center"
  }
});
