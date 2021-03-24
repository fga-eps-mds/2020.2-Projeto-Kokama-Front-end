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
import Icon from "react-native-vector-icons/AntDesign";
import { Dictionary, Phrase } from "./interface";
import { PORTUGUESE, KOKAMA } from "../../config/constants";
import SyncStorage from "sync-storage";
import { capitalizeFirstLetter } from "../../utils/translation";

const Translation = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
  const [destLanguage, setDestLanguage] = useState(KOKAMA);
  const [historyIsEnabled, setHistoryIsEnabled] = useState(false);
  const toggleHistory = () =>
    setHistoryIsEnabled((previousState) => !previousState);

  let dictionary: Array<Dictionary> = JSON.parse(
    JSON.stringify(dictionaryJSON)
  );

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
  }

  function insertSymbol() {
    setTranslation(translation + "ɨ");
  }

  function getKokamaElement(userInput: string) {
    let kokamaElement: Array<Dictionary> = [];
    for (let element of dictionary) {
      if (userInput.toLowerCase() == element.word_kokama.toLowerCase()) {
        let portugueseWords: string = element.translations[0];
        element.translations.map((word: string, index: number) => {
          if (index > 0) {
            portugueseWords = portugueseWords.concat(", ", word);
          }
        });

        let kokamaWord:string = element.word_kokama;
        if (element.pronunciation_type === "feminino") {
          kokamaWord = kokamaWord.concat(' (Feminino)');
        }

        SyncStorage.set(kokamaWord, portugueseWords);
        kokamaElement.push(element);
        break;
      }
    }

    return kokamaElement;
  }

  function getPortugueseElement(userInput: string) {
    let portugueseElements: Array<Dictionary> = [];
    for (let element of dictionary) {
      for (let word of element.translations) {
        if (userInput.toLowerCase() == word.toLowerCase()) {
          let portugeseWords: string = element.translations[0];
          element.translations.map((word: string, index: number) => {
            if (index > 0) {
              portugeseWords = portugeseWords.concat(", ", word);
            }
          });

          let kokamaWord:string = element.word_kokama;
          if (element.pronunciation_type === "feminino") {
            kokamaWord = kokamaWord.concat(' (Feminino)');
          }

          SyncStorage.set(kokamaWord, portugeseWords);
          portugueseElements.push(element);
        }
      }
    }

    return portugueseElements;
  }

  function getDictionaryElements(language: string, userInput: string) {
    let dictionaryElements: Array<Dictionary> = [];

    if (language == KOKAMA) {
      let kokamaElement = getKokamaElement(userInput);
      dictionaryElements = dictionaryElements.concat(kokamaElement);
    } else {
      let portugueseElements = getPortugueseElement(userInput);
      dictionaryElements = dictionaryElements.concat(portugueseElements);
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
            <Text style={translationStyle.translatedWord}>
              {capitalizeFirstLetter(words)}
            </Text>
            <View style={translationStyle.exampleArea}>
              {phrases.map((phrase, index) => (
                <View key={index}>
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

  function translateHistoryWord(words: Array<string>, language: string) {
    let word: string = "";

    if (language === KOKAMA) {
      word = words[1];
    } else {
      word = words[0];
    }

    setTranslation(word);
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
            onChangeText={(userInput) => setTranslation(userInput)}
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
          <TouchableWithoutFeedback onPress={toggleHistory}>
            <Text style={translationStyle.historyText}>Histórico</Text>
          </TouchableWithoutFeedback>
        </View>
        {SyncStorage.getAllKeys().length > 0 && historyIsEnabled && (
          <View style={translationStyle.historyWordsArea}>
            {SyncStorage.getAllKeys().reverse().map((word: string, index: number) => (
              <View key={index} style={translationStyle.historyWords}>
                <Text
                  style={[
                    translationStyle.historyWord,
                    { fontWeight: "bold", fontSize: 20 },
                  ]}
                >
                  {capitalizeFirstLetter(word)}
                </Text>
                <Text style={translationStyle.historyWord}>
                  {capitalizeFirstLetter(SyncStorage.get(word))}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Translation;
