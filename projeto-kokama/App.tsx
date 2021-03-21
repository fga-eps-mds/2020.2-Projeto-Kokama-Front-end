import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import translationStyle from "./style/translationStyle";
import React, { useState } from "react";
import dictionary from "./dictionary.json";
import HighlightText from "@sanar/react-native-highlight-text";
import Icon from "react-native-vector-icons/AntDesign";

const App = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let Dictionary = JSON.parse(JSON.stringify(dictionary));
  let wordObject = Object();

  function changeLanguage() {
    // Exchange the languages
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    // Clear text input if not a word in the dictionary
    // else replace word for it's translation
    let lang = languageToAtt(destLanguage)[0];
    if (wordObject != null) {
      setTranslation(wordObject[lang]);
    } else {
      setTranslation("");
    }
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

    for (let word of Dictionary) {
      if (entry.toLowerCase() == word[lang1].toLowerCase()) {
        wordObject = word;
        return (
          <View style={translationStyle.translationArea}>
            <Text style={translationStyle.translatedWord}>
              {wordObject[lang2]}
            </Text>

            <View style={translationStyle.exampleArea}>
              <Text style={translationStyle.label}>
                {setLabel(originLanguage)}
              </Text>
              {getExample(originLanguage)}
            </View>

            <View style={translationStyle.exampleArea}>
              <Text style={translationStyle.label}>
                {setLabel(destLanguage)}
              </Text>
              {getExample(destLanguage)}
            </View>
          </View>
        );
      }
    }

    wordObject = null;
    if (entry != "") {
      return (
        <Text style={{ textAlign: "center" }}>Tradução não encontrada</Text>
      );
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

      let word = wordObject[lang];

      return (
        <View style={translationStyle.examples}>
          <HighlightText
            style={translationStyle.examplesText}
            highlightStyle={{ color: "red" }}
            searchWords={[word]}
            textToHighlight={text}
          />
        </View>
      );
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={translationStyle.container} keyboardShouldPersistTaps={"always"}>
        <StatusBar translucent backgroundColor={"#f23232"} />
        {/* Logo area */}
        <View style={translationStyle.logoArea}>
          <Image
            style={translationStyle.logo}
            source={require("./assets/logo.png")}
          />
          <Text style={translationStyle.windowName}>Tradução</Text>
        </View>

        {/* Change language area */}
        <View style={translationStyle.changeLanguage}>
          {/* First language */}
          <View style={[translationStyle.originLanguageArea]}>
            <Text 
              style={translationStyle.originLanguage}>
              
              {originLanguage}
            </Text>
          </View>

          {/* Change language icon */}
          <View style={translationStyle.languageExchangeArea}>
            <TouchableWithoutFeedback onPress={changeLanguage}>
              <Icon name="swap" size={40} color="#333" />
            </TouchableWithoutFeedback>
          </View>

          {/* Second Language */}
          <View style={[translationStyle.destLanguageArea]}>
            <Text style={translationStyle.destLanguage}>{destLanguage}</Text>
          </View>
        </View>

        {/* Text box for the user entry */}
        <View style={translationStyle.userInput}>
          <TextInput
            style={translationStyle.textBox}
            placeholder="Toque para digitar"
            onChangeText={(translation) => setTranslation(translation)}
            defaultValue={translation}
          />

          <TouchableWithoutFeedback onPress={insertSymbol}>
            <View style={translationStyle.symbolArea}>
              <Text style={translationStyle.symbol}>ɨ</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Translate answer */}
        {Translate(originLanguage, translation)}

        {/* Historic */}
        <View style={translationStyle.historyArea}>
          <Text style={translationStyle.historyText}>Histórico</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
