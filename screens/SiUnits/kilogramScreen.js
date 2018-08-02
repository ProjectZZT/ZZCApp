import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Button, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Swiper from "react-native-swiper"; //swipe modules url:  https://www.npmjs.com/package/react-native-swiper

export default class kilogramScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rst_value: "",
      Hz: "",
      N: "",
      Pa: "",
      J: "",
      W: "",
      C: "",
      V: "",
      F: "",
      Om: "",
      Semens: "",
      Wb: "",
      Te: "",
      Henry: "",
      Pacs: "",
      Numeter: "",
      NM: "",
      JK: "",
      JkgK: "",
      WmK: "",
      Jm: "",
      Vm: "",
      Ctm: "",
      Csm: "",
      Fm: "",
      Hm: "",
      Jmol: ""
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this._getValue(), 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timerID);
  }

  async _getValue() {
    let result = await AsyncStorage.getItem("kg");
    let Hz_result = await AsyncStorage.getItem("Hz");
    let N_result = await AsyncStorage.getItem("N");
    let Pa_result = await AsyncStorage.getItem("Pa");
    let J_result = await AsyncStorage.getItem("J");
    let W_result = await AsyncStorage.getItem("W");
    let C_result = await AsyncStorage.getItem("C");
    let V_result = await AsyncStorage.getItem("V");
    let F_result = await AsyncStorage.getItem("F");
    let Om_result = await AsyncStorage.getItem("Om");
    let Semens_result = await AsyncStorage.getItem("Semens");
    let Wb_result = await AsyncStorage.getItem("Wb");
    let Te_result = await AsyncStorage.getItem("Te");
    let Henry_result = await AsyncStorage.getItem("Henry");
    let Pacs_result = await AsyncStorage.getItem("Pacs");
    let Numeter_result = await AsyncStorage.getItem("Numeter");
    let NM_result = await AsyncStorage.getItem("NM");
    let JK_result = await AsyncStorage.getItem("JK");
    let JkgK_result = await AsyncStorage.getItem("JkgK");
    let WmK_result = await AsyncStorage.getItem("WmK");
    let Jm_result = await AsyncStorage.getItem("Jm");
    let Vm_result = await AsyncStorage.getItem("Vm");
    let Ctm_result = await AsyncStorage.getItem("Ctm");
    let Csm_result = await AsyncStorage.getItem("Csm");
    let Fm_result = await AsyncStorage.getItem("Fm");
    let Hm_result = await AsyncStorage.getItem("Hm");
    let Jmol_result = await AsyncStorage.getItem("Jmol");

    this.setState({ rst_value: result });
    this.setState({ Hz: Hz_result });
    this.setState({ N: N_result });
    this.setState({ Pa: Pa_result });
    this.setState({ J: J_result });
    this.setState({ W: W_result });
    this.setState({ C: C_result });
    this.setState({ V: V_result });
    this.setState({ F: F_result });
    this.setState({ Om: Om_result });
    this.setState({ Semens: Semens_result });
    this.setState({ Wb: Wb_result });
    this.setState({ Te: Te_result });
    this.setState({ Henry: Henry_result });
    this.setState({ Pacs: Pacs_result });
    this.setState({ Numeter: Numeter_result });
    this.setState({ NM: NM_result });
    this.setState({ JK: JK_result });
    this.setState({ JkgK: JkgK_result });
    this.setState({ WmK: WmK_result });
    this.setState({ Jm: Jm_result });
    this.setState({ Vm: Vm_result });
    this.setState({ Ctm: Ctm_result });
    this.setState({ Csm: Csm_result });
    this.setState({ Fm: Fm_result });
    this.setState({ Hm: Hm_result });
    this.setState({ Jmol: Jmol_result });
  }

  render() {
    return (

      <View style={styles.list}>
        <View style={styles.listContainer}>

          <Text style={styles.listResultHeader}>킬로그램(kg)</Text>
          <Text style={styles.listResult}>
            {this.state.rst_value}kg
                  </Text>

        </View>
        <Swiper
          showsButtons={false}
          autoplay={false}
          bounces={true}
          showsPagination={true}
          loop={false}
        >
          <View style={styles.slide1}>
            <Text style={styles.derivedUnitHeader}>SI유도단위</Text>
            <ScrollView style={styles.scrollListContainer}>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : s^{-1} */}
                <Text style={styles.derivedUnitText}>헤르츠(Hz)/주파수</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Hz}Hz</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : kg•m•s^−2 */}
                <Text style={styles.derivedUnitText}>뉴턴(N)/힘, 무게</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.N}N</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^−1•kg•s^−2 */}
                <Text style={styles.derivedUnitText}>파스칼(Pa)/압력, 응력</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Pa}Pa</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^2•kg•s^−2 */}
                <Text style={styles.derivedUnitText}>줄(J)/에너지, 일, 열량</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.J}J</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^2•kg•s^−3 */}
                <Text style={styles.derivedUnitText}>와트(W)/일률, 전력, 방사속</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.W}W</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^2•kg•s^−3 */}
                <Text style={styles.derivedUnitText}>쿨롱(C)/일률, 전력, 방사속</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.C}C</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^2·kg·s^−3·A^−1 */}
                <Text style={styles.derivedUnitText}>볼트(V)/전압, 전위, 기전력</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.V}V</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m−2·kg−1·s4·A2 */}
                <Text style={styles.derivedUnitText}>패럿(F)/전기 용량</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.F}F</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m2·kg·s−3·A−2 */}
                <Text style={styles.derivedUnitText}>옴(Ω)/전기 용량</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Om}Ω</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^−2·kg^−1·s^3·A^2 */}
                <Text style={styles.derivedUnitText}>지멘스(S)/전도율</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Semens}S</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m2·kg·s−2·A−1 */}
                <Text style={styles.derivedUnitText}>웨버(Wb)/자기 선속(자기력 선속)</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Wb}Wb</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m2·kg·s−2·A−1 */}
                <Text style={styles.derivedUnitText}>테슬라(T)/자기선속밀도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Te}T</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m2·kg·s^{-2}·A^{-2}	*/}
                <Text style={styles.derivedUnitText}>헨리(H)/인덕턴스</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Henry}H</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.derivedUnitHeader}>SI유도단위가 포함되어 있는 유도단위</Text>
            <ScrollView style={styles.scrollListContainer}>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{-1}·kg·s^{-1}	*/}
                <Text style={styles.derivedUnitText}>파스칼 초(Pa·s)/점성도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Pacs}Pa·s</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>뉴턴 미터(N·m)/힘의 모멘트</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Numeter}N·m</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>뉴턴 매 미터(N/m)/표면 장력</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.NM}N/m</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>줄 매 켈빈(J/K)/열용량, 엔트로피</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.JK}J/K</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>줄 매 킬로그램 켈빈(J/(kg·K))/비열용량, 비엔트로피</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.JkgK}J/(kg·K)</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>와트 매 미터 켈빈(W/(m·K))/열전도도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.WmK}W/(m·K)</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>줄 매 세제곱미터(J/m^3)/에너지 밀도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Jm}J/m^3</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>볼트 매 미터(V/m)/전기장의 세기</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Vm}V/m</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>쿨롱 매 세제곱미터(C/m^3)/전하밀도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Ctm}C/m^3</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>쿨롱 매 제곱미터(C/m^2)/전하밀도</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Csm}C/m^2</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>패럿 매 미터(F/m)/유전율</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Fm}F/m</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>헨리 매 미터(H/m)/투자율</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Hm}H/m</Text>
              </View>
              <View style={styles.derivedUnit}>
                {/* SI 기본 단위로 표시 : m^{2}·kg·s^{-2}	*/}
                <Text style={styles.derivedUnitText}>줄 매 몰(J/m)/몰에너지</Text>
                <Text style={styles.derivedUnitResult}>= {this.state.Jmol}J/m</Text>
              </View>
            </ScrollView>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    backgroundColor: "#2171b3",
  },
  scrollListContainer: {
    flex: 5
  },
  listResultHeader: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 10
  },
  listResult: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 10
  },
  derivedUnitHeader: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",
    color: "#2171b3",
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 10
  },
  derivedUnitText: {
    fontSize: 15,
    textAlign: "left",
    color: "#2171b3",
    marginBottom: 10,
  },
  derivedUnit: {
    marginLeft: 20,
    marginTop: 15,
  },
  derivedUnitResult: {
    fontSize: 15,
    textAlign: "left",
    color: "#2171b3",
    marginBottom: 10,
    marginLeft: 15,
  },
  slide1: {
    flex: 1
  },
  slide2: {
    flex: 1
  },
});