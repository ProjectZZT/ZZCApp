import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class SiUnitsBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            미터(m) = {this.props.si_m}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            킬로그램(kg) = {this.props.si_kg}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            초(s) = {this.props.si_s}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            암페어(A) = {this.props.si_A}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            켈빈(K) = {this.props.si_K}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            몰(mol) = {this.props.si_mol}
          </Text>
        </View>

        <View style={styles.siunitbox}>
          <Text style={styles.siunittext}>
            칸델라(cd) = {this.props.si_cd}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff"
  },
  siunitbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  siunittext: {
    fontSize: 32,
    textAlign: "center",
    color: "#2f95dc"
  }
});
