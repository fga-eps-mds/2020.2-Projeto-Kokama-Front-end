import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const CONTAINER_BACKGROUND = "#F0F0F0";
const BORDER_STANDARD = "#BBBBBB";
const WHITE_BACKGROUND = "#FFFFFF";
export const KOKAMA_RED = "#ff6363";
export const TEXT = "#333333";
export const HISTORY_TEXT = "#A5A5A5";
const HISTORY_WORD_TEXT = "#555555";

const styles = StyleSheet.create({
  container: {
    maxWidth: screen.width,
    height: window.height,
    backgroundColor: CONTAINER_BACKGROUND,
  },

  logoArea: {
    flexDirection: "column",
    marginTop: STATUSBAR_HEIGHT + 5,
    borderBottomWidth: 1,
    borderColor: BORDER_STANDARD,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CONTAINER_BACKGROUND,
  },
  logo: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  windowName: {
    fontSize: 20,
    marginBottom: 5,
  },
  changeLanguage: {
    height: 55,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: BORDER_STANDARD,
    backgroundColor: CONTAINER_BACKGROUND,
    justifyContent: "space-between",
    alignItems: "center",
  },
  originLanguageArea: {
    flex: 3,
  },
  originLanguage: {
    textAlign: "left",
    marginLeft: 24,
    fontSize: 22,
  },
  languageExchangeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  destLanguageArea: {
    flex: 3,
  },
  destLanguage: {
    textAlign: "right",
    marginRight: 24,
    fontSize: 22,
  },
  userInput: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: BORDER_STANDARD,
    backgroundColor: WHITE_BACKGROUND,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    flex: 6,
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
  },
  symbolArea: {
    flex: 1,
    height: "65%",
    marginRight: 15,
    borderWidth: 2.5,
    borderColor: KOKAMA_RED,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 25,
  },
  translationArea: {
    width: "100%",
    backgroundColor: WHITE_BACKGROUND,
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
    marginTop: 5,
    paddingBottom: 10,
    borderColor: BORDER_STANDARD,
    alignItems: "flex-start",
  },
  translatedWord: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 28,
    color: TEXT,
    paddingLeft: 23,
    marginBottom: 15,
    borderBottomWidth: 1.5,
    borderColor: BORDER_STANDARD,
  },
  exampleArea: {
    width: "100%",
    marginTop: 15,
    flexDirection:'column',
  },
  examplesText: {
    width: "100%",
    fontSize: 15,
    color: TEXT,
    marginBottom: 5,
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
  examplesWord: {
    fontSize: 20,
    color: KOKAMA_RED,
    height: "100%",
    flexWrap: "wrap",
  },
  historyArea: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    marginTop: 5,
    borderColor: BORDER_STANDARD,
    backgroundColor: WHITE_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyText: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: HISTORY_TEXT,
  },
  historyIcon: {
    marginRight: 25,
  },
  historyWordsArea: {
    flexDirection: "column",
    backgroundColor: WHITE_BACKGROUND,
    borderBottomWidth: 1.5,
    borderColor: BORDER_STANDARD,
  },
  historyWords: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: BORDER_STANDARD,
    paddingLeft: 23,
    paddingVertical: 7,
    color: HISTORY_WORD_TEXT,
  },
  historyWord: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    color: HISTORY_WORD_TEXT,
  },
});

export default styles;