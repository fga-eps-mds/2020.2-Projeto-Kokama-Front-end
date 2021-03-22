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
import translationStyle from "./styles";
import React, { useState } from "react";
import dictionaryJSON from "./dictionary.json";
import HighlightText from "@sanar/react-native-highlight-text";
import Icon from "react-native-vector-icons/AntDesign";
import { Dictionary, Phrase } from "./interface";
import { PORTUGUESE, KOKAMA } from "../../config/constants";

const Translation = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
  const [destLanguage, setDestLanguage] = useState(KOKAMA);
  let dictionary: Array<Dictionary> = JSON.parse(
    JSON.stringify(dictionaryJSON)
  );
  let wordObject: Dictionary;

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
  }

  function insertSymbol() {
    setTranslation(translation + "ɨ");
  }

  function getDictionaryElements(language: string, userInput: string) {
    let dictionaryElements: Array<Dictionary> = [];

    if (language == KOKAMA) {
      for (let element of dictionary) {
        if (userInput.toLowerCase() == element.word_kokama.toLowerCase()) {
          dictionaryElements.push(element);
          break;
        }
      }
    } else {
      for (let element of dictionary) {
        for (let word of element.translations) {
          if (userInput.toLowerCase() == word.toLowerCase()) {
            dictionaryElements.push(element);
          }
        }
      }
    }

    return dictionaryElements;
  }

  function getWords(language: string, word: Dictionary) {
    if (language == KOKAMA) {
      return word.translations;
    } else {
      return [word.word_kokama];
    }
  }

  function getTranslations(
    language: string,
    dictionaryElements: Array<Dictionary>
  ) {
    let translatedWords: string = "";

    for (let element of dictionaryElements) {
      let words: Array<string> = getWords(language, element);
      for (let word of words) {
        if (translatedWords.length == 0) {
          translatedWords = translatedWords.concat(word);
        } else {
          translatedWords = translatedWords.concat(", ", word);
        }
      }
    }

    return translatedWords;
  }

  function getPhrases(dictionaryElements: Array<Dictionary>) {
    let phrases: Array<Phrase> = [];

    for (let element of dictionaryElements) {
      phrases = phrases.concat(element.phrases);
    }

    return phrases;
  }

  function Translate(language: string, userInput: string) {
    let translationList: Array<Dictionary> = getDictionaryElements(
      language,
      userInput
    );

    let words = getTranslations(language, translationList);
    let phrases: Array<Phrase> = getPhrases(translationList);

    return (
      <View>
        {phrases.length === 0 && translation !== "" && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>Tradução não encontrada</Text>
          </View>
        )}
        {phrases.length > 0 && (
          <View style={translationStyle.translationArea}>
            <Text style={translationStyle.translatedWord}>{words}</Text>
            <View style={translationStyle.exampleArea}>
              {phrases.map((phrase) => (
                <View>
                  <Text>{phrase.phrase_kokama}</Text>
                  <Text>{phrase.phrase_portuguese}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={translationStyle.container}
        keyboardShouldPersistTaps={"always"}
      >
        <StatusBar translucent backgroundColor={"#f23232"} />
        {/* Logo area */}
        <View style={translationStyle.logoArea}>
          <Image
            style={translationStyle.logo}
            source={require("../../assets/img/logo.png")}
          />
          <Text style={translationStyle.windowName}>Tradução</Text>
        </View>

        {/* Change language area */}
        <View style={translationStyle.changeLanguage}>
          {/* First language */}
          <View style={[translationStyle.originLanguageArea]}>
            <Text style={translationStyle.originLanguage}>
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

export default Translation;
