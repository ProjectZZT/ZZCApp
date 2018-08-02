import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Button, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SiUnitsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.ScrollViewContainer}>
                {/*Start list */}

                {/* Meter */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("meter") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/meter.png')
                            }
                        />
                        <Text style={styles.listText}>
                            미터(m)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* Kilogram */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("kilogram") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/kilograms.png')
                            }
                        />
                        <Text style={styles.listText}>
                            킬로그램(kg)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* Second */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("second") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/second.png')
                            }
                        />
                        <Text style={styles.listText}>
                            시간(s)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* Ampere */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("ampere") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/ampere.png')
                            }
                        />
                        <Text style={styles.listText}>
                            암페어(A)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />

                </TouchableOpacity>

                {/* Kelvin */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("kelvin") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/kelvin.png')
                            }
                        />
                        <Text style={styles.listText}>
                            켈빈(K)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* Mole */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("mole") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/mole.png')
                            }
                        />
                        <Text style={styles.listText}>
                            몰(mol)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* Candela */}
                <TouchableOpacity style={styles.list} onPress={() => { this.props.navigation.navigate("candela") }}>
                    <View style={styles.listContants}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={
                                require('../assets/images/candela.png')
                            }
                        />
                        <Text style={styles.listText}>
                            칸델라(cd)
                        </Text>
                    </View>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={
                            require('../assets/images/right-arrow.png')
                        }
                    />
                </TouchableOpacity>

                {/* End list */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30
    },
    ScrollViewContainer: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    listText: {
        fontSize: 22,
        color: "#2171b3",
        textAlign: "left",
        marginLeft: 10
    },
    listContants: {
        flexDirection: "row",
    }
});
