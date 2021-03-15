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
            "PT": "Banana",
            "KK": "Panara",
            "KKF": "",
            "EXPT": "Eu comi uma banana hoje",
            "EXKK": "ore wa Panara wo tabetai",
            "EXKKF": ""
        },
        {
            "PT": "Amor",
            "KK": "Tsachi",
            "KKF": "Tsachi",
            "EXPT": "Foi amor a primeira vista",
            "EXKK": "Tsachi lorem ipsum",
            "EXKKF": "lorem ipsum Tsachi"
        }

    ]`

const App = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let wordObject = Object();

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    // Apagar caixa de texto
  }

  function Translate(language: string, entry:string) {
    
    let lang1: string;
    let lang2: string;
    if (language == "Português") {
      lang1 = "PT";
      lang2 = "KK";
    } else {
      lang1 = "KK"
      lang2 = "PT"
    }

    for (let word of JSON.parse(dictionary)) {
      if(entry.toLowerCase() == word[lang1].toLowerCase()){
        wordObject = word;
        return word[lang2];
      }
    }

    wordObject = null;
    if (entry != "") {
      return "Tradução não encontrada";
    }
  }

  function getExample(language:string) {

    let lang1: string;
    let lang2: string;
    if (language == "Português") {
      lang1 = "PT";
      lang2 = "KK";
    } else {
      lang1 = "KK"
      lang2 = "PT"
    }

    if (wordObject != null) {

      let att = String();
      att = att.concat("EX", lang1);

      if (language == "Português" || !wordObject[att.concat("F")]) {
        let text = String();
        text = text.concat("Frase em ", language, ":\n", wordObject[att]);
        return text
      }
      else {
        let text = String();
        text = text.concat("Frase em ", language, ":\n(H) ", wordObject[att]);
        att = ""
        att = att.concat("EX", lang1, "F");
        text = text.concat("\n(M) ", wordObject[att]);
        return text
      }

      
    }
  }


  return (
    // Div principal com estilização em linha
    <ScrollView style={styles.scrollBar}>
      <SafeAreaView style={styles.container}>
        {/* Área da logo */}
        <View style={styles.logoArea}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <Text>Tradução</Text>
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
              {getExample(destLanguage)}
            </Text>
          </View>
          
        </View>

        {/* Histórico */}
        <View style={styles.historyArea}>
          <Text style={styles.historyText}>Histórico ></Text>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: screen.width,
    height: screen.height,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  scrollBar: {},
  logoArea: {
    height: 100,
    borderBottomWidth: 1.5,
    borderColor: "#BBB",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    backgroundColor: "#F0F0F0",
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
    borderColor: "#BBB",
    width: window.width,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-around",
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
    fontSize: 22,
  },
  userInput: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#BBB",
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
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
    borderColor: "#BBB",
    alignItems: "center",
  },
  translatedWord: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 30,
    paddingLeft: 23,
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderColor: "#BBB",
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
    width: window.width,
    flexDirection: "row",
    marginTop: 10,
    height: 40,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderColor: "#BBB",
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

export default App;
