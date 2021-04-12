import React, { Component } from 'react';
import { StyleSheet, View, Text, } from "react-native";
import { Spinner } from "native-base";
import Colors from "../assets/Colors"

const spinnerStyle = StyleSheet.create({
    message: {
        fontSize: 18,
        color: Colors.BLACK,
    },
    loading: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});


export default class SpinnerLoading extends Component {
    render() {
        return (
            <View style={spinnerStyle.loading}>
                <Spinner color={Colors.RED} />
                <Text style={spinnerStyle.message}>
                    Carregando...
                </Text>
            </View>
        );
    }
}