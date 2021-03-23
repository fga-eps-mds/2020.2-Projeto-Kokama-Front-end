import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    maxWidth: screen.width,
    height: window.height,
    backgroundColor: "#F0F0F0",
  },

  logoArea: {
    flexDirection: "column",
    marginTop: STATUSBAR_HEIGHT + 5,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
  },
  logo: {
    backgroundColor: "#fff",
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
    borderColor: "#BBB",
    backgroundColor: "#F0F0F0",
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
    borderColor: "#BBB",
    backgroundColor: "#FFF",
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
    borderColor: "#ff6363",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 25,
  },
  translationArea: {
    width: "100%",
    backgroundColor: "#FFF",
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
    marginTop: 5,
    paddingBottom: 10,
    borderColor: "#BBB",
    alignItems: "center",
  },
  translatedWord: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 28,
    paddingLeft: 23,
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderColor: "#BBB",
  },
  exampleArea: {
    width: "90%",
    marginVertical: 10,
  },
  label: {
    height: 30,
    fontWeight: "bold",
    fontSize: 17,
  },
  examples: {
    width: "100%",
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  examplesText: {
    fontSize: 20,
    color: "#000",
    height: "100%",
    flexWrap: "wrap",
  },
  examplesWord: {
    fontSize: 20,
    color: "#FF6363",
    height: "100%",
    flexWrap: "wrap",
  },
  historyArea: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    marginTop: 5,
    borderColor: "#BBB",
    backgroundColor: "#FFF",
  },
  historyText: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: "#a5a5a5",
  },
  historyWordsArea: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderBottomWidth: 1.5,
    borderColor: "#BBB",
  },
  historyWords: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    paddingLeft: 15,
    color: "#555",
  },
});

export default styles;