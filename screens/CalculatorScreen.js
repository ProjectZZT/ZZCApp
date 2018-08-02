import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  createStackNavigator,
  Button,
  Platform,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Constants } from "expo";
import { Ionicons } from "@expo/vector-icons";

import SiUnitsBox from "../components/SiUnitsBox";
import ExpressionBox from "../components/ExpressionBox";
import ResultBox from "../components/ResultBox.js";
import NumPad from "../components/NumPad.js";
import Swiper from "react-native-swiper"; //swipe modules url:  https://www.npmjs.com/package/react-native-swiper

// zerozone calculator CalculatorScreen

const math = require("mathjs");

// const meter = 30.663318988498369762190615215544;
// const kg = 1.4755214242305377923686457033392e+40;
// const s = 9.3192631770e+9;
// const A = 6.789686873189371672739005990065e+8;
// const K = 2.2666645141955062469932813819125;
// const mol = 6.022140857e+23;
// const cd = 2.614830525694657745252;

const meter = 3.3356409519815204e-9;
const kg = 1.3563925121697e+50;
const s = 1;
const A = 7.7119460413431e+38;
const K = 20836612000;
const mol = 6.022140857e+23;
const cd = 2.2096489085029e+30;

var input_value = [];

export default class CalculatorScreen extends React.Component {
  static navigationOptions = {
    header: null //header 부분 감춤
  };

  constructor(props) {
    super(props);
    this.state = {
      lastexpression: [],
      expression: "",
      result: "",
      date: "",
    };

    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
    this._rollbackExpression = this._rollbackExpression.bind(this);
    this._rollbackExpressionAll = this._rollbackExpressionAll.bind(this);
    this._saveexpression = this._saveexpression.bind(this);
  }

  todaydate() {
    var d = new Date();
    var year = d.getFullYear();

    var month = d.getMonth();
    var day = d.getDate();

    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    d = year + "/" + month + "/" + day + "/" + " " + hour + ":" + minute + ":" + second;

    return d;
  }


  //수식을 History에 저장(SAVE)
  async _saveexpression() {
    let value = [];
    let date = this.todaydate();

    try {
      var save_expression = [];
      //저장한 값이 있으면 연속 저장을 위해 저장한 값을 가져옴
      save_expression = await AsyncStorage.getItem("expression");
      if (save_expression !== null) {
        value = JSON.parse(save_expression);

        input_value = { expression: this.state.expression, date: date }; //수식을 JSON 형식으로 배열에 추가

        value.push(input_value);

        await AsyncStorage.setItem("expression", JSON.stringify(value)); //수식 JSON string형으로 값 저장
      } else {
        value.push({ expression: this.state.expression, date: date });

        await AsyncStorage.setItem("expression", JSON.stringify(value));
      }
    } catch (error) {
      alert(error);
    }
  }

  //최근 입력 수식 삭제(DEL)
  _rollbackExpression() {
    this.state.expression &&
      this.setState(prevState => ({
        expression: prevState.lastexpression.pop(), //pop() 배열 끝부분 제거
        lastexpression: prevState.lastexpression
      }));
  }
  //수식 전체 삭제(AC)
  _rollbackExpressionAll() {
    this.state.expression &&
      this.setState(prevState => ({
        result: "",
        expression: prevState.lastexpression.splice(), //splice() 배열 전체 부분 초기화
        lastexpression: prevState.lastexpression,

      }));
  }
  //수식 입력
  _assembleExpression(symbol) {
    this.setState(prevState => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol
    }));
  }
  //연산
  async _calculateResult() {

    let source = this.state.expression.toString();
    var result;
    var si_m, //미터
      si_kg, //킬로그램
      si_s, //초
      si_A, //암페어
      si_K, //켈빈
      si_mol, //몰
      si_cd, //칸델라
      si_Hz = s ** (-1), //헤르츠
      si_N = meter * kg * s ** (-2), //뉴턴
      si_Pa = meter ** (-1) * kg * s ** (-2), //파스칼
      si_J = meter * 2 * kg * s ** (-2), //줄
      si_W = meter * 2 * kg * s ** (-3), //와트
      si_C = s * A, //쿨롱
      si_V = meter ** 2 * kg * s ** (-3) * A ** (-1), //볼트
      si_F = meter ** (-2) * kg ** (-1) * s ** 4 * A ** 2, //패럿
      si_Om = meter ** 2 * kg * s ** (-3) * A ** (-2), //옴
      si_Semens = meter ** (-2) * kg ** (-1) * s ** 3 * A ** 2, //지멘스
      si_Wb = meter ** 2 * kg * s ** (-2) * A ** (-1), //웨버
      si_Te = kg * s ** (-2) * A ** (-1), //테슬라
      si_Henry = meter * 2 * kg * s ** (-2) * A ** (-2), //헨리
      si_Pacs = meter ** (-1) * kg * s ** (-1), //파스칼 초
      si_Numeter = meter ** 2 * kg * s ** (-2), //뉴턴 미터
      si_NM = kg * s ** (-2), //뉴턴 매 미터
      si_JK = meter ** 2 * kg * s ** (-2) * K ** (-1), //줄 매 켈빈
      si_JkgK = meter ** 2 * s ** (-2) * K ** (-1), //줄 매 킬로그램 켈빈
      si_WmK = meter * kg * s ** (-3) * K ** (-1), //와트 매 미터 켈빈
      si_Jm = meter ** (-1) * kg * s ** (-2), //줄 매 세제곱미터
      si_Vm = meter * kg * s ** (-3) * A ** (-1), //볼트 매 미터
      si_Ctm = meter ** (-3) * s * A, //쿨롱 매 세제곱미터
      si_Csm = meter ** (-2) * s * A, //쿨롱 매 제곱미터
      si_Fm = meter ** (-3) * kg ** (-1) * s ** 4 * A ** 2, //패럿 매 미터
      si_Hm = meter * kg * s ** (-2) * A ** (-2), //헨리 매 미터
      si_Jmol = meter ** 2 * kg * s ** (-2) * K ** (-1) * mol ** (-1); //줄 매 몰
    try {
      for (let i = 0; i < this.state.expression.length; i++) {
        //단위 연산을 할때 단위를 숫자로 변환해주는 반복문 및 조건문
        if (source.indexOf("mol") != -1) {
          source = source.replace("mol", mol);
        } else if (source.indexOf(" J/kgK ") != -1) {//error
          source = source.replace(" J/kgK ", "(" + si_JkgK + ")");
        } else if (source.indexOf("kg") != -1) {
          source = source.replace("kg", "(" + kg + ")");
        } else if (source.indexOf(" s ") != -1) {
          source = source.replace(" s ", "(" + s + ")");
        } else if (source.indexOf(" A ") != -1) {
          source = source.replace(" A ", "(" + A + ")");
        } else if (source.indexOf(" K ") != -1) {
          source = source.replace(" K ", "(" + K + ")");
        } else if (source.indexOf(" m ") != -1) {
          source = source.replace(" m ", "(" + meter + ")");
        } else if (source.indexOf("cd") != -1) {
          source = source.replace("cd", "(" + cd + ")");
        } else if (source.indexOf(" ㎐") != -1) {
          source = source.replace(" ㎐", "(" + si_Hz + ")");
        } else if (source.indexOf(" Ν") != -1) {
          source = source.replace(" Ν", "(" + si_N + ")");
        } else if (source.indexOf(" Pa") != -1) {
          source = source.replace(" Pa", "(" + si_Pa + ")");
        } else if (source.indexOf(" J") != -1) {
          source = source.replace(" J", "(" + si_J + ")");
        } else if (source.indexOf(" W") != -1) {
          source = source.replace(" W", "(" + si_W + ")");
        } else if (source.indexOf(" C") != -1) {
          source = source.replace(" C", "(" + si_C + ")");
        } else if (source.indexOf(" V") != -1) {
          source = source.replace(" V", "(" + si_V + ")");
        } else if (source.indexOf(" F") != -1) {
          source = source.replace(" F", "(" + si_F + ")");
        } else if (source.indexOf(" Ω") != -1) {
          source = source.replace(" Ω", "(" + si_Om + ")");
        } else if (source.indexOf(" S") != -1) {
          source = source.replace(" S", "(" + si_Semens + ")");
        } else if (source.indexOf("Wb ") != -1) {//error
          source = source.replace("Wb ", "(" + meter ** 2 * kg * s ** (-2) * A ** (-1) + ")");
        } else if (source.indexOf(" T") != -1) {
          source = source.replace(" T", "(" + si_Te + ")");
        } else if (source.indexOf(" H") != -1) {
          source = source.replace(" H", "(" + si_Henry + ")");
        } else if (source.indexOf("Pas ") != -1) {//error
          source = source.replace("Pas ", "(" + si_Pacs + ")");
        } else if (source.indexOf(" Nm") != -1) {
          source = source.replace(" Nm", "(" + si_Numeter + ")");
        } else if (source.indexOf(" N/M") != -1) {
          source = source.replace(" N/M", "(" + si_NM + ")");
        } else if (source.indexOf("J/K ") != -1) {//error
          source = source.replace("J/K ", "(" + si_JK + ")");
        } else if (source.indexOf("W/mK ") != -1) {//error
          source = source.replace("W/mK ", "(" + si_WmK + ")");
        } else if (source.indexOf("J/㎥ ") != -1) {//error
          source = source.replace("J/㎥ ", "(" + si_Jm + ")");
        } else if (source.indexOf("V/m ") != -1) {//error
          source = source.replace("V/m ", "(" + si_Vm + ")");
        } else if (source.indexOf("C/㎥ ") != -1) {//error
          source = source.replace("C/㎥ ", "(" + si_Ctm + ")");
        } else if (source.indexOf("C/㎡ ") != -1) {//error
          source = source.replace("C/㎡ ", "(" + si_Csm + ")");
        } else if (source.indexOf("F/m ") != -1) {//error
          source = source.replace("F/m ", "(" + si_Fm + ")");
        } else if (source.indexOf("H/m ") != -1) {//error
          source = source.replace("H/m ", "(" + si_Hm + ")");
        } else if (source.indexOf(" J/mol") != -1) {
          source = source.replace(" J/mol", "(" + si_Jmol + ")");
        } else if (source.indexOf("√") != -1) {
          source = source.replace("√", "sqrt");
        } else if (source.indexOf("π") != -1) {
          source = source.replace("π", "pi");
        } else {
          source[i] = this.state.expression[i];
        }
      }

      result = math.eval(source);

      si_m = result / meter;
      si_kg = result / kg;
      si_s = result / s;
      si_A = result / A;
      si_K = result / K;
      si_mol = result / mol;
      si_cd = result / cd;

      si_Hz = result / si_Hz; //헤르츠
      si_N = result / si_N; //뉴턴
      si_Pa = result / si_Pa; //파스칼
      si_J = result / si_J; //줄
      si_W = result / si_W; //와트
      si_C = result / si_C; //쿨롱
      si_V = result / si_V; //볼트
      si_F = result / si_F; //패럿
      si_Om = result / si_Om; //옴
      si_Semens = result / si_Semens; //지멘스
      si_Wb = result / si_Wb; //웨버
      si_Te = result / si_Te; //테슬라
      si_Henry = result / si_Henry; //헨리
      si_Pacs = result / si_Pacs; //파스칼 초
      si_Numeter = result / si_Numeter; //뉴턴 미터
      si_NM = result / si_NM; //뉴턴 매 미터
      si_JK = result / si_JK; //줄 매 켈빈
      si_JkgK = result / si_JkgK; //줄 매 킬로그램 켈빈
      si_WmK = result / si_WmK; //와트 매 미터 켈빈
      si_Jm = result / si_Jm; //줄 매 세제곱미터
      si_Vm = result / si_Vm; //볼트 매 미터
      si_Ctm = result / si_Ctm; //쿨롱 매 세제곱미터
      si_Csm = result / si_Csm; //쿨롱 매 제곱미터
      si_Fm = result / si_Fm; //패럿 매 미터
      si_Hm = result / si_Hm; //헨리 매 미터
      si_Jmol = result / si_Jmol; //줄 매 몰

      //변환 값 문자열 변환
      si_m = si_m.toString();
      si_kg = si_kg.toString();
      si_s = si_s.toString();
      si_A = si_A.toString();
      si_K = si_K.toString();
      si_mol = si_mol.toString();
      si_cd = si_cd.toString();
      si_Hz = si_Hz.toString();
      si_N = si_N.toString();
      si_Pa = si_Pa.toString();
      si_J = si_J.toString();
      si_W = si_W.toString();
      si_C = si_C.toString();
      si_V = si_V.toString();
      si_F = si_F.toString();
      si_Om = si_Om.toString();
      si_Semens = si_Semens.toString();
      si_Wb = si_Wb.toString();
      si_Te = si_Te.toString();
      si_Henry = si_Henry.toString();
      si_Pacs = si_Pacs.toString();
      si_Numeter = si_Numeter.toString();
      si_NM = si_NM.toString();
      si_JK = si_JK.toString();
      si_JkgK = si_JkgK.toString();
      si_WmK = si_WmK.toString();
      si_Jm = si_Jm.toString();
      si_Vm = si_Vm.toString();
      si_Ctm = si_Ctm.toString();
      si_Csm = si_Csm.toString();
      si_Fm = si_Fm.toString();
      si_Hm = si_Hm.toString();
      si_Jmol = si_Jmol.toString();

      //변환된 문자열을 저장
      //기본단위
      await AsyncStorage.setItem("meter", si_m);
      await AsyncStorage.setItem("kg", si_kg);
      await AsyncStorage.setItem("s", si_s);
      await AsyncStorage.setItem("ampere", si_A);
      await AsyncStorage.setItem("kelvin", si_K);
      await AsyncStorage.setItem("mol", si_mol);
      await AsyncStorage.setItem("cd", si_cd);
      //유도단위
      await AsyncStorage.setItem("Hz", si_Hz);
      await AsyncStorage.setItem("N", si_N);
      await AsyncStorage.setItem("Pa", si_Pa);
      await AsyncStorage.setItem("J", si_J);
      await AsyncStorage.setItem("W", si_W);
      await AsyncStorage.setItem("C", si_C);
      await AsyncStorage.setItem("V", si_V);
      await AsyncStorage.setItem("F", si_F);
      await AsyncStorage.setItem("Om", si_Om);
      await AsyncStorage.setItem("Semens", si_Semens);
      await AsyncStorage.setItem("Wb", si_Wb);
      await AsyncStorage.setItem("Te", si_Te);
      await AsyncStorage.setItem("Henry", si_Henry);
      await AsyncStorage.setItem("Pacs", si_Pacs);
      await AsyncStorage.setItem("Numeter", si_Numeter);
      await AsyncStorage.setItem("NM", si_NM);
      await AsyncStorage.setItem("JK", si_JK);
      await AsyncStorage.setItem("JkgK", si_JkgK);
      await AsyncStorage.setItem("WmK", si_WmK);
      await AsyncStorage.setItem("Jm", si_Jm);
      await AsyncStorage.setItem("Vm", si_Vm);
      await AsyncStorage.setItem("Ctm", si_Ctm);
      await AsyncStorage.setItem("Csm", si_Csm);
      await AsyncStorage.setItem("Fm", si_Fm);
      await AsyncStorage.setItem("Hm", si_Hm);
      await AsyncStorage.setItem("Jmol", si_Jmol);
    } catch (e) {
      console.error(e);
      result = "Error";
    }
    this.setState({ result: result });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ExpressionBox expression={this.state.expression} />
        <ResultBox result={this.state.result} />

        <TouchableOpacity
          style={styles.conversionButton}
          onPress={() => {
            this.props.navigation.navigate("SiUnits");
          }}
        >
          <Text style={styles.conversionButtonText}>어떤 단위로 결과를 보고 싶으신가요?</Text>
          <Text style={styles.conversionButtonText}>확인하시려면 이곳을 누르세요!</Text>
        </TouchableOpacity>

        <View style={styles.arrowButton}>
          <Image
            style={{ width: 15, height: 15 }}
            source={
              require('../assets/images/left-arrow.png')
            }
          />
          <Text style={{ fontSize: 13, marginBottom: 3, color: "#808080" }}>
            계산기를 스크롤하여 단위를 입력할 수 있습니다
          </Text>
          <Image
            style={{ width: 15, height: 15 }}
            source={
              require('../assets/images/right-arrow.png')
            }
          />
        </View>

        <NumPad
          assembleExpression={this._assembleExpression}
          calculateResult={this._calculateResult}
          deletePressed={this._rollbackExpression}
          deletePressedAll={this._rollbackExpressionAll}
          saveexpression={this._saveexpression}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
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
    color: "#2171b3",
    textAlign: "center"
  },
  Ionicons: {
    marginLeft: 10
  },
  SiUnitsBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: -10
  },
  conversionButton: {
    alignItems: "center",
    marginBottom: 30
  },
  conversionButtonText: {
    color: "#2171b3",
    fontWeight: "bold",
  },
  arrowButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
