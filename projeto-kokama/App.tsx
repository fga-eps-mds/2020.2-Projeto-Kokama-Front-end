import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  Animated,
} from "react-native";
import styles from "./style/Translation.component.style";
import React, { useState, useRef } from "react";
import dictionary from "./dictionary.json";
import HighlightText from "@sanar/react-native-highlight-text";

const App = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let wordObject = Object();
  let Dictionary = JSON.parse(JSON.stringify(dictionary));

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
    setTranslation('');
  }

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 500
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 150
    }).start();
  };

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

    for (let index = 0; index < Dictionary.length; index++) {
      if (
        entry.toLowerCase() == Dictionary[index][lang1].toLowerCase()
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

      after;

      return (
        <View style={styles.examples}>
          <HighlightText
            highlightStyle={{ color: 'red' }}
            searchWords={[word]}
            textToHighlight={text}
          />
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
          <Animated.View style={[styles.originLanguageArea, {opacity: fadeAnim}]}>
            <Text style={styles.originLanguage}>{originLanguage}</Text>
          </Animated.View>

          {/* Change language icon */}
          <View style={styles.languageExchangeArea}>
            <TouchableWithoutFeedback  onPress={changeLanguage} onPressIn={fadeOut} onPressOut={fadeIn}>
              <Image
                style={styles.languageExchange}
                source={require("./assets/exchange.png")}
              />
            </TouchableWithoutFeedback>
          </View>

          {/* Second Language */}
          <Animated.View style={[styles.destLanguageArea, {opacity: fadeAnim}]}>
            <Text style={styles.destLanguage}>{destLanguage}</Text>
          </Animated.View>
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

export default App;
