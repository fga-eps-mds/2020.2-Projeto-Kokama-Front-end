import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import Colors from "../../assets/Colors";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    maxWidth: screen.width,
    height: window.height,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  changeLanguage: {
    height: 55,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Colors.DARK_GRAY,
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
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    flex: 7,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  symbolArea: {
    flex: 1,
    height: "65%",
    marginRight: 15,
    borderWidth: 2.5,
    borderColor: Colors.RED,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 25,
  },
  notFound: {
    height: 30,
    justifyContent: "center",
    marginBottom: -5,
  },
  translationArea: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
    marginTop: 5,
    borderColor: Colors.DARK_GRAY,
    alignItems: "center",
  },
  ShareTitle: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderColor: Colors.DARK_GRAY,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  ShareIcon: {
  },
  translatedWord: {
    width: "80%",
    fontSize: 28,
    color: Colors.TEXT,
    borderColor: Colors.DARK_GRAY,
  },
  exampleArea: {
    width: "100%",
    marginVertical: 15,
    flexDirection: 'column',
  },
  examplesText: {
    width: "100%",
    fontSize: 15,
    color: Colors.TEXT,
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
  examplesWord: {
    fontSize: 20,
    color: Colors.RED,
    height: "100%",
    flexWrap: "wrap",
  },
  historyArea: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    marginTop: 5,
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyText: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: Colors.HISTORY_TEXT,
  },
  historyIcon: {
    marginRight: 25,
  },
  historyWordsArea: {
    flexDirection: "column",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1.5,
    borderColor: Colors.DARK_GRAY,
  },
  historyWords: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: Colors.DARK_GRAY,
    paddingLeft: 23,
    paddingVertical: 7,
  },
  historyWord: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    color: Colors.HISTORY_WORD_TEXT,
  },
  Title: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: Colors.HISTORY_TEXT,
  },
});

export default styles;