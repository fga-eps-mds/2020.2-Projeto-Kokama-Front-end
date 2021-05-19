import React from 'react';
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


const SpinnerLoading = () => {
    return (
        <View style={spinnerStyle.loading}>
            <Spinner color={Colors.RED} />
            <Text style={spinnerStyle.message}>
                Carregando...
                </Text>
        </View>
    );
}

export default SpinnerLoading;