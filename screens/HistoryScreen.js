import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  createStackNavigator,
  Button,
  AsyncStorage,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Constants } from "expo";
import { Ionicons } from "@expo/vector-icons";
import CalculatorScreen from "./CalculatorScreen.js";

var save_expression = [];
var expression = [];
export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "저장된 수식(Stored formula)",
    headerTitleStyle: {
      color: "#2171b3",
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      expression: [],

    };
  }

  //기기에서 처음 열었을 때 실행되어 저장한 수식값을 가져오는 메소드 && 화면 새로고침
  async componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  async tick() {
    save_expression = await AsyncStorage.getItem("expression");
    expression = JSON.parse(save_expression);

    if (expression.length > 0) {
      this.setState({ expression: expression });
    }
  }


  async removeItemValue(key) {

    if (key !== null && key !== undefined) {
      expression = await AsyncStorage.getItem("expression");

      let exp_temp = JSON.parse(expression);

      var index = exp_temp
        .map(function (e) {
          return e.expression;
        })
        .indexOf(key);

      const newArray = [...this.state.expression];

      newArray.splice(index, 1);

      this.setState({ expression: newArray });
      AsyncStorage.setItem("expression", JSON.stringify(newArray));
    }
  }

  render() {
    if (this.state.expression.length === 0) {

      return (
        <View style={styles.Emptycontainer}>
          <Text style={styles.EmptyText}>
            저장한 수식이 없습니다!
          </Text>
        </View>
      );
    } else if (this.state.expression !== null) {


      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.expression}

            renderItem={({ item, index }) =>
              <View style={styles.historyBox}>
                <View style={styles.historyTitle}>

                  <Text style={styles.titleText}>
                    Index {index + 1}
                  </Text>
                  <Text style={styles.TextDate}>
                    {item.date}
                  </Text>
                </View>

                <View style={styles.expression}>
                  <Text style={styles.expressionText}>
                    {item.expression}
                  </Text>
                </View>
                <View style={styles.Buttons}>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => { this.removeItemValue(item.expression) }}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  historyBox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2171b3",
  },
  expressionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#2171b3",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  Buttons: {
    alignItems: "flex-end",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#2171b3",
    backgroundColor: "#2171b3"
  },
  historyTitle: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#2171b3",
    flexDirection: "row"
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
    color: "#2171b3",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  TextDate: {
    fontSize: 12,
    textAlign: "right",
    color: "#808080",
    marginTop: 15,
    marginRight: 10,
    marginBottom: 10
  },
  expression: {
  },
  deleteButton: {
    alignItems: "flex-end",
    backgroundColor: "#2171b3"
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5
  },
  Emptycontainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  EmptyText: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 16,
    color: "#808080",
    fontWeight: "bold",
    textAlignVertical: "center"
  }
});
