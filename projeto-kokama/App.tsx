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

let dictionary =
    `[
        {
            "Português": "Banana",
            "Kokama": "Panara",
            "Ex-Português": "Eu comi uma banana hoje",
            "Ex-Kokama": "ore wa Panara wo tabetai"
        },
        {
            "Português": "Amor",
            "Kokama": "Tsachi",
            "Ex-Português": "Foi amor a primeira vista",
            "Ex-Kokama-H": "Tsachi lorem ipsum",
            "Ex-Kokama-M": "lorem ipsum Tsachi"
        }

    ]`

export default function App() {

  const [translation, setTranslation] = useState(" ");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let wordObject = Object();

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    // Apagar caixa de texto
  }

  function otherLanguage(language: string) {
    if (language == "Português") {
      return "Kokama"
    }
    return "Português"
  }

  function Translate(language: string, entry:string) {
    for (let word of JSON.parse(dictionary)) {
      if(entry == word[language]){
        wordObject = word;
        return word[otherLanguage(language)];
      }
    }
    wordObject = null;
    return "Palavra Não Existe";
  }

  function getExample(language:string) {
    if (wordObject != null) {

      let att = String();
      att = att.concat("Ex-", language);

      if (language == "Português" || !wordObject[att.concat("-H")]) {
        let text = String();
        text = text.concat("Frase em ", language, ":\n", wordObject[att]);
        return text
      }
      else {
        att = att.concat("-H");
        let text = String();
        text = text.concat("Frase em ", language, ":\n(H) ", wordObject[att]);
        att = ""
        att = att.concat("Ex-", language, "-M");
        text = text.concat("\n(M) ", wordObject[att]);
        return text
      }

      
    }
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

        {/* Resposta da tradução */}
        <View style={styles.translationArea}>
          <Text style={styles.translatedWord}>
            {Translate(originLanguage, translation)}
          </Text>
          <View style={styles.exampleArea}>
            <Text style={styles.examples}>
              {getExample(originLanguage)}
            </Text>
          </View>

          <View style={styles.exampleArea}>
            <Text style={styles.examples}>
              {/* {genderSpeech(originLanguage)} */}
            </Text>
          </View>
          
        </View>

        {/* Histórico */}
        <View style={styles.historyArea}>
          <Text style={styles.historyText}>Histórico</Text>
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
  translationArea: {
    width: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  translatedWord: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 30,
    paddingLeft: 23,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  exampleArea: {
    width: "90%",
    height: 100,
    marginVertical: 10,
  },
  examples: {
    fontSize: 25,
  },
  historyArea: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    marginTop: 10,
    height: 40,
    backgroundColor: "#FFF",
  },
  historyText: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: "#a5a5a5",
  },
});
