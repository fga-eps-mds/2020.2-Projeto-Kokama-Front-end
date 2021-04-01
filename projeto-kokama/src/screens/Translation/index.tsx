import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import SyncStorage from "sync-storage";
import Icon from "react-native-vector-icons/AntDesign";
import HighlightText from "@sanar/react-native-highlight-text";
import { Dictionary, Phrase, HistoryTuple } from "./interface";
import {
  PORTUGUESE,
  KOKAMA,
  HISTORY_SIZE,
} from "../../config/constants";
import translationStyle from "./styles";
import {
  capitalizeFirstLetter,
  removeStringFromMarkers,
} from "../../utils/translation";
import Colors from "../../assets/Colors";
import TopMenu from "../../components/TopMenu";
import History from "../../components/History";
import styles from "./styles";

let historyArray: Array<HistoryTuple> = SyncStorage.get("history") || [];

const Translation = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
  const [destLanguage, setDestLanguage] = useState(KOKAMA);
  const [historyIsEnabled, setHistoryIsEnabled] = useState(false);
  const toggleHistory = () => {
    if (historyArray.length > 0) {
      setHistoryIsEnabled((previousState) => !previousState);
    }
  }

  function exchangeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
  }

  function insertSymbol() {
    setTranslation(translation + "ɨ");
  }

  // When a word with translation is found, store it in history
  // An Array Object is saved in storage with a "history" key
  function addHistoryWord(
    kokamaWord: string,
    portugueseWords: Array<string>
  ) {
    // Format portuguese words string for presentation
    let concatPortuguese: string = portugueseWords.join(", ");

    // Create new history element to add to the history array and storage
    let historyWord: HistoryTuple = {
      kokama: kokamaWord,
      portuguese: concatPortuguese,
    };
    // If the element to be added is already in history, delete the old one
    historyArray.forEach((word, index) => {
      if (word.kokama == historyWord.kokama) {
        historyArray.splice(index, 1);
      }
    });
    // Add the new history element at the beginning of the history array
    historyArray.unshift(historyWord);
    // Remove the oldest element if history reach max size
    if (historyArray.length > HISTORY_SIZE) {
      historyArray.pop();
    }
    // Add the updated history array as an object to storage
    SyncStorage.set("history", historyArray);
  }

  // Set the text input equal to the kokama word the user pressed inside history
  function translateHistoryWord(word: string, language: string) {
    setTranslation(capitalizeFirstLetter(word));
    // Automatically changes to kokama
    if (language !== KOKAMA) {
      exchangeLanguage();
    }
  }

  // Check and return from dictionary word element that match the kokama user input
  function getKokamaElement(userInput: string) {
    let kokamaElement: Array<Dictionary> = [];
    for (let element of SyncStorage.get("dictionary")) {
      if (userInput.toLowerCase() == element.word_kokama.toLowerCase()) {
        // Add matching word to the return array
        kokamaElement.push(element);
        // Add matching word to history
        addHistoryWord(
          element.word_kokama,
          element.translations
        );
        break;
      }
    }

    return kokamaElement;
  }

  // Check and return from dictionary word elements that match the portuguese user input
  function getPortugueseElement(userInput: string) {
    let portugueseElements: Array<Dictionary> = [];

    SyncStorage.get("dictionary").forEach((element: Dictionary) => {
      for (let word of element.translations) {
        if (userInput.toLowerCase() == word.toLowerCase()) {
          // Add matching word to the return array
          portugueseElements.push(element);
          // Add matching word to history
          addHistoryWord(
            element.word_kokama,
            element.translations
          );
        }
      }
    });

    return portugueseElements;
  }

  // Returns all dictionary elements that matches the user input, based on the language searched
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

  // For a given dictionary element(word), return its kokama and portuguese words for presentation
  function getWords(language: string, word: Dictionary) {
    if (language == KOKAMA) {
      return word.translations;
    } else {
      return [word.word_kokama];
    }
  }

  // For a given dictionary element array, return its respective translation for presentation
  function getTranslations(
    language: string,
    dictionaryElements: Array<Dictionary>
  ) {
    let translatedWords: string = "";

    for (let element of dictionaryElements) {
      let words: Array<string> = getWords(language, element);
      translatedWords = words.join(", ");
    }

    return translatedWords;
  }

  // For a given dictionary element array, return its respective example phrases for presentation
  function getPhrases(dictionaryElements: Array<Dictionary>) {
    let phrases: Array<Phrase> = [];
    for (let element of dictionaryElements) {
      phrases = phrases.concat(element.phrases);
    }

    return phrases;
  }

  // Main translation function
  // Return TSX visualization of the translation
  function Translate(language: string, userInput: string) {
    let translationList: Array<Dictionary> = getDictionaryElements(
      language,
      userInput
    );

    let words = getTranslations(language, translationList);
    let phrases: Array<Phrase> = getPhrases(translationList);

    return (
      <View>
        {/* Warning if the user input does not match any word in dictionary */}
        {phrases.length === 0 && translation !== "" && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>Tradução não encontrada</Text>
          </View>
        )}
        {/* If a translation is found, present the translations and phrases */}
        {phrases.length > 0 && (
          <View style={translationStyle.translationArea}>
            {/* Presentation of the translations words */}
            <Text style={translationStyle.translatedWord}>
              {capitalizeFirstLetter(words)}
            </Text>
            {phrases.map((phrase, index) => (
              <View style={translationStyle.exampleArea} key={index}>
                {/* Phrase kokama */}
                <HighlightText
                  style={translationStyle.examplesText}
                  highlightStyle={{ color: Colors.RED }}
                  searchWords={[
                    removeStringFromMarkers(phrase.phrase_kokama, "<", ">"),
                  ]}
                  textToHighlight={phrase.phrase_kokama
                    .replace("<", "")
                    .replace(">", "")}
                />
                {/* Phrase portuguese */}
                <HighlightText
                  style={translationStyle.examplesText}
                  highlightStyle={{ color: Colors.RED }}
                  searchWords={[
                    removeStringFromMarkers(phrase.phrase_portuguese, "<", ">"),
                  ]}
                  textToHighlight={phrase.phrase_portuguese
                    .replace("<", "")
                    .replace(">", "")}
                />
              </View>
            ))}
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
            <TouchableWithoutFeedback onPress={exchangeLanguage}>
              <Icon name="swap" size={40} />
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
            onChangeText={(input) => setTranslation(input)}
            defaultValue={translation}
          />

          <TouchableWithoutFeedback onPress={insertSymbol}>
            <View style={translationStyle.symbolArea}>
              <Text style={translationStyle.symbol}>ɨ</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Translate answer */}
        {SyncStorage.get("dictionary") !== undefined && (
          <View>{Translate(originLanguage, translation)}</View>
        )}

        <History
          isEnabled={historyIsEnabled}
          data={historyArray}
          onPressTitle={toggleHistory}
          onPressWord={translateHistoryWord}
          translateFrom={originLanguage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Translation;
