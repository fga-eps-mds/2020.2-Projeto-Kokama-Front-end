import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      maxWidth: screen.width,
      height: screen.height,
      backgroundColor: "#F0F0F0",
      alignItems: "center",
    },
    scrollBar: {},
    logoArea: {
      flex: 0.13,
      maxHeight: 85,
      flexDirection: 'row',
      marginTop: STATUSBAR_HEIGHT,
      borderBottomWidth: 2,
      borderColor: "#BBB",
      width: "100%",
      alignItems: "center",
      backgroundColor: "#F0F0F0",
    },
    logo: {
      height: 80,
      width: 80,
    },
    windowName: {
      fontSize: 28,
    },
    changeLanguage: {
      flex: 0.095,
      maxHeight: 60,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#BBB",
      width: window.width,
      backgroundColor: "#F0F0F0",
      justifyContent: "space-around",
    },
    originLanguageArea: {
      flex: 1,
      justifyContent: "center",
    },
    originLanguage: {
      textAlign: "center",
      fontSize: 22,
    },
    languageExchangeArea: {
      flex: 0.7,
      alignItems: "center",
      justifyContent: "center",
    },
    languageExchange: {
      width: 50,
      height: 45,
    },
    destLanguageArea: {
      flex: 1,
      justifyContent: "center",
    },
    destLanguage: {
      textAlign: "center",
      fontSize: 22,
    },
    userInput: {
      width: "100%",
      flexDirection: "row",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#BBB",
      flex: 0.085,
      maxHeight: 58,
      backgroundColor: "#FFF",
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    textBox: {
      flex: 0.7,
      textAlign: "left",
      fontSize: 18,
      paddingLeft: 23,
    },
    symbolArea: {
      flex: 0.15,
      height: "65%",
      margin: 15,
      borderWidth: 2.5,
      borderColor: "#ff6363",
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    symbol: {
      fontSize: 30,
    },
    translationArea: {
      width: "100%",
      flex: 0.6,
      backgroundColor: "#FFF",
      borderBottomWidth: 1.5,
      borderTopWidth: 1,
      marginTop: 5,
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
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row'
    },
    examplesText: {
      fontSize: 20,
      color: '#000',
      height: '100%',
      flexWrap: 'wrap'
    },
    examplesWord: {
      fontSize: 20,
      color: 'red',
      height: '100%',
      flexWrap: 'wrap'
    },
    historyArea: {
      flexDirection: "row",
      marginTop: 5,
      flex: 0.08,
      borderBottomWidth: 1.5,
      borderTopWidth: 1.5,
      borderColor: "#BBB",
      backgroundColor: "#FFF",
    },
    historyText: {
      flex: 1,
      textAlignVertical: "center",
      textAlign: "left",
      fontSize: 20,
      paddingLeft: 23,
      color: "#a5a5a5",
    },
  });

export default styles; 