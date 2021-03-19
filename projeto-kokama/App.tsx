import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "./style/Translation.component.style";
import React, { useState } from "react";
import Dictionary from "./dictionary";
//import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let wordObject = Object();

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    setTranslation("");
  }

  function languageToAtt(language: string) {
    if (language == "Português") {
      return ["PT", "KK"];
    }
    return ["KK", "PT"];
  }

  function insertSymbol() {
    setTranslation(translation + "ɨ");
  }

  function Translate(language: string, entry: string) {
    let lang1: string;
    let lang2: string;
    [lang1, lang2] = languageToAtt(language);

    for (let index = 0; index < Object(Dictionary).length; index++) {
      if (
        entry.toLowerCase() == Object(Dictionary[index])[lang1].toLowerCase()
      ) {
        wordObject = Dictionary[index];
        return (
          <View style={styles.translationArea}>
            <Text style={styles.translatedWord}>{wordObject[lang2]}</Text>

            <View style={styles.exampleArea}>
              <Text style={styles.label}>{setLabel(originLanguage)}</Text>
              {getExample(originLanguage)}
            </View>

            <View style={styles.exampleArea}>
              <Text style={styles.label}>{setLabel(destLanguage)}</Text>
              {getExample(destLanguage)}
            </View>
          </View>
        );
      }
    }

    wordObject = null;
    if (entry != "") {
      return <Text>Tradução não encontrada</Text>;
    }
  }

  function setLabel(language: string) {
    if (wordObject != null) {
      return "Frase em " + language + "\n";
    }
  }

  function getExample(language: string) {
    let lang: string;
    lang = languageToAtt(language)[0];

    if (wordObject != null) {
      let att = String();
      att = att.concat("EX", lang);
      let text = "";

      if (language == "Português" || !wordObject[att.concat("F")]) {
        text = wordObject[att];
      } else {
        text = text.concat("(H) ", wordObject[att]);
        att = "";
        att = att.concat("EX", lang, "F");
        text = text.concat("\n(M) ", wordObject[att]);
      }

      let before = "";
      let word = wordObject[lang];
      let after = "";

      let befIndex = text.toLowerCase().indexOf(word.toLowerCase());
      before = text.substring(0, befIndex);

      if (befIndex > 0) {
        word = word.toLowerCase();
      }

      let aftIndex = befIndex + word.length;
      after = text.substring(aftIndex);

      after

      return (
        <View style={styles.examples}>
          <Text style={styles.examplesText}>
            {before}{word}{after}
          </Text>
        </View>
      );
    }
  }

  return (
    // Main View
    <ScrollView style={styles.scrollBar} keyboardShouldPersistTaps={"always"}>
      <StatusBar translucent backgroundColor={"#f23232"} />
      <SafeAreaView style={styles.container}>
        {/* Logo area */}
        <View style={styles.logoArea}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <Text style={styles.windowName}>Tradução</Text>
        </View>

        {/* Change language area */}
        <View style={styles.changeLanguage}>
          {/* First language */}
          <View style={styles.originLanguageArea}>
            <Text style={styles.originLanguage}>{originLanguage}</Text>
          </View>

          {/* Change language icon */}
          <View style={styles.languageExchangeArea}>
            <TouchableWithoutFeedback onPress={changeLanguage}>
              <Image
                style={styles.languageExchange}
                source={require("./assets/exchange.png")}
              />
            </TouchableWithoutFeedback>
          </View>

          {/* Second Language */}
          <View style={styles.destLanguageArea}>
            <Text style={styles.destLanguage}>{destLanguage}</Text>
          </View>
        </View>

        {/* Text box for the user entry */}
        <View style={styles.userInput}>
          <TextInput
            style={styles.textBox}
            placeholder="Toque para digitar"
            onChangeText={(translation) => setTranslation(translation)}
            defaultValue={translation}
          />

          <TouchableWithoutFeedback onPress={insertSymbol}>
            <View style={styles.symbolArea}>
              <Text style={styles.symbol}>ɨ</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Translate answer */}
        {Translate(originLanguage, translation)}

        {/* Historic */}
        <View style={styles.historyArea}>
          <Text style={styles.historyText}>Histórico</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App