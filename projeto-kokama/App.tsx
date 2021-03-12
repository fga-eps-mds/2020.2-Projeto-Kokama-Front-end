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

  const [translation, setTranslation] = useState(" ");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    // Apagar caixa de texto
  }

  return (
    <ScrollView style={styles.scrollBar}>
      <SafeAreaView style={styles.container}>
        {/* Área da logo */}
        <View style={styles.logoArea}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        {/* Área de escolha da língua */}
        <View style={styles.changeLanguage}>
          {/* Primeiro idioma */}
          <View style={styles.originLanguageArea}>
            <Text style={styles.originLanguage}>{originLanguage}</Text>
          </View>

          {/* Ícone de mudança de idioma */}
          <View style={styles.languageExchangeArea}>
            <TouchableWithoutFeedback onPress={changeLanguage}>
              <Image
                style={styles.languageExchange}
                source={require("./assets/exchange.png")}
              />
            </TouchableWithoutFeedback>
          </View>

          {/* Segundo idioma */}
          <View style={styles.destLanguageArea}>
            <Text style={styles.destLanguage}>{destLanguage}</Text>
          </View>
        </View>

        {/* Área da caixa de texto para entrada do usuário */}
        <View style={styles.userInput}>
          <TextInput
            style={styles.textBox}
            placeholder="Toque para digitar"
            onChangeText={(word) => setTranslation(word)}
          />
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
  changeLanguage: {
    height: 55,
    flexDirection: "row",
    borderBottomWidth: 1,
    width: window.width,
    backgroundColor: "#e5e5e5",
  },
  originLanguageArea: {
    flex: 1,
    justifyContent: "center",
  },
  originLanguage: {
    textAlign: "center",
    fontSize: 22,
  },
  languageExchangeArea: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  languageExchange: {
    width: 50,
    height: 45,
  },
  destLanguageArea: {
    flex: 1,
    justifyContent: "center",
  },
  destLanguage: {
    textAlign: "center",
    left: 8,
    fontSize: 22,
  },
  userInput: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    backgroundColor: "#FFF",
  },
  textBox: {
    flex: 1,
    textAlign: "left",
    fontSize: 23,
    paddingLeft: 23,
  },
});
