import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

// Constantes e variáveis globais
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  return (
    <ScrollView style={styles.scrollBar}>
      <SafeAreaView style={styles.container}>
        {/* Área da logo */}
        <View style={styles.logoArea}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollBar: {},
  logoArea: {
    height: 100,
    borderBottomWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    backgroundColor: "#e5e5e5",
  },
  logo: {
    height: 80,
    width: 80,
    top: 15,
  },
});
