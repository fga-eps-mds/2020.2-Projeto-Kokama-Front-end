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
import React, { useState, useEffect } from "react";
import SyncStorage from "sync-storage";
import Icon from "react-native-vector-icons/AntDesign";
import HighlightText from "@sanar/react-native-highlight-text";
import { Dictionary, Phrase, HistoryTuple } from "./interface";
import {
  PORTUGUESE,
  KOKAMA,
  HISTORYSIZE,
  FEMININO,
} from "../../config/constants";
import translationStyle from "./styles";
import Api from "../../api/Api";
import { capitalizeFirstLetter, removeStringFromMarkers } from "../../utils/translation";

let historyArray: Array<HistoryTuple> = SyncStorage.get("history") || [];

const Translation = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
  const [destLanguage, setDestLanguage] = useState(KOKAMA);
  const [historyIsEnabled, setHistoryIsEnabled] = useState(false);
  const toggleHistory = () =>
    setHistoryIsEnabled((previousState) => !previousState);

  // Updates dictionary
  // Executes one time on the inicialization
  useEffect(() => {
    const fetchData = async () => {
      const result = await Api(
        "https://projeto-kokama-traducao.herokuapp.com/dicionario/?format=json"
      );
      SyncStorage.set("dictionary", result.data);
    };

    fetchData();
  }, []);

  // Switch the direction of the translation
  function exchangeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp);
  }

  // Add the special character to the actual position in the TextInput
  // Called by pressing the "i cortado" Icon
  function insertSymbol() {
    setTranslation(translation + "ɨ");
  }

  // When a word with translation is found, store it in history
  // An Array Object is saved in storage with a "history" key
  function addHistoryWord(
    kokamaWord: string,
    portugueseWords: Array<string>,
    pronunciationType: string
  ) {
    // Format portuguese words string for presentation
    let concatPortuguese: string = portugueseWords.join(", ");

    let concatKokama: string = kokamaWord;
    // Add a marker to the kokama word if its pronunciation type is feminine
    // Allowing user to identify this in presentation
    if (pronunciationType === FEMININO) {
      concatKokama = concatKokama.concat(
        " (",
        capitalizeFirstLetter(FEMININO),
        ")"
      );
    }

    // Create new history element to add to the history array and storage
    let historyWord: HistoryTuple = {
      kokama: concatKokama,
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
    if (historyArray.length > HISTORYSIZE) {
      historyArray.pop();
    }
    // Add the updated history array as an object to storage
    SyncStorage.set("history", historyArray);
  }

  // Set the text input equal to the kokama word the user pressed inside history
  function translateHistoryWord(word: string, language: string) {
    // Get the presentation kokama word and align its format to the one in the dictionary
    // ex. remove the " (Feminino)" after word with feminine pronunciations
    let kokamaWord: string = word.split(" (")[0];
    setTranslation(capitalizeFirstLetter(kokamaWord));
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
          element.translations,
          element.pronunciation_type
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
            element.translations,
            element.pronunciation_type
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
                  highlightStyle={{ color: "red" }}
                  searchWords={[removeStringFromMarkers(phrase.phrase_kokama, "<", ">")]}
                  textToHighlight={phrase.phrase_kokama
                    .replace("<", "")
                    .replace(">", "")}
                />
                {/* Phrase portuguese */}
                <HighlightText
                  style={translationStyle.examplesText}
                  highlightStyle={{ color: "red" }}
                  searchWords={[removeStringFromMarkers(phrase.phrase_portuguese, "<", ">")]}
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
            <TouchableWithoutFeedback onPress={exchangeLanguage}>
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
        {SyncStorage.get("dictionary") !== undefined && (
          <View>{Translate(originLanguage, translation)}</View>
        )}

        {/* Historic */}
        <View style={translationStyle.historyArea}>
          <TouchableWithoutFeedback onPress={toggleHistory}>
            <Text style={translationStyle.historyText}>Histórico</Text>
          </TouchableWithoutFeedback>
        </View>
        {historyArray.length > 0 && historyIsEnabled && (
          <View style={translationStyle.historyWordsArea}>
            {historyArray.map((word: HistoryTuple, index: number) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() =>
                  translateHistoryWord(word.kokama, originLanguage)
                }
              >
                <View style={translationStyle.historyWords}>
                  <Text
                    style={[
                      translationStyle.historyWord,
                      { fontWeight: "bold", fontSize: 20 },
                    ]}
                  >
                    {capitalizeFirstLetter(word.kokama)}
                  </Text>
                  <Text style={translationStyle.historyWord}>
                    {capitalizeFirstLetter(word.portuguese)}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Translation;
