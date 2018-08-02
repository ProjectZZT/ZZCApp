import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class DerivedUnitsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ScrollView style={styles.ScrollViewContainer}>
            <View style={styles.list}>
                <Button
                title="미터(m)"
                color="#2171b3"
                onPress={() => {
                    this.props.navigation.navigate("DerivedUnits")
                }}              
                />
                <Ionicons
                    name={"ios-person-outline"}
                    size={30}
                    color={"black"}
                />                      
            </View>
            
            <View style={styles.list}>
                <Button
                title="미터(m)"
                color="#2171b3"
                onPress={() => {
                    this.props.navigation.navigate("DerivedUnits")
                }}              
                />
                <Ionicons
                    name={"ios-person-outline"}
                    size={30}
                    color={"black"}
                />                      
            </View>

            

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#bbb",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  ScrollViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  }
});
