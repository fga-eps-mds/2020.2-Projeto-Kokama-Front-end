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
  logoArea: {
    flexDirection: "column",
    marginTop: STATUSBAR_HEIGHT + 5,
    borderBottomWidth: 1,
    borderColor: Colors.DARK_GRAY,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    borderColor: Colors.RED,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 25,
  },
  translationArea: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
    marginTop: 5,
    paddingBottom: 10,
    borderColor: Colors.DARK_GRAY,
    alignItems: "flex-start",
  },
  translatedWord: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 28,
    color: Colors.TEXT,
    paddingLeft: 15,
    marginBottom: 15,
    borderColor: Colors.DARK_GRAY,
  },
  exampleArea: {
    width: "100%",
    marginTop: 15,
    flexDirection: 'column',
  },
  examplesText: {
    width: "100%",
    fontSize: 15,
    color: Colors.TEXT,
    marginBottom: 5,
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
  ShareTitle: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1.5,
    marginTop: 10,
    marginLeft: 40,
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  Title: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: Colors.HISTORY_TEXT,
  },
  ShareIcon: {
    marginBottom: 10,
  },
});

export default styles;