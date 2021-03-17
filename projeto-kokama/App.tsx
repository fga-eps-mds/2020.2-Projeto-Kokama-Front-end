import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

interface Word {
  PT: string,
  KK: string,
  KKF: string,
  EXPT: string,
  EXKK: string,
  EXKKF: string
}
interface DictWord {
  [id: number]: Word
}

const Dictionary: DictWord = [
  {
    PT: "Banana",
    KK: "Panara",
    KKF: "",
    EXPT: "Eu comi uma banana hoje",
    EXKK: "ore wa Panara wo tabetai",
    EXKKF: ""
  },
  {
    PT: "Amor",
    KK: "Tsachi",
    KKF: "Tsachi",
    EXPT: "istaFoi amor a primeira vistaFoi amor a primeira vista",
    EXKK: "Tsachi lorem ipsum",
    EXKKF: "lorem ipsum Tsachi"
  },
]

const App = () => {
  const [translation, setTranslation] = useState("");
  const [originLanguage, setOriginLanguage] = useState("Português");
  const [destLanguage, setDestLanguage] = useState("Kokama");
  let wordObject = Object();

  function changeLanguage() {
    let temp = originLanguage;
    setOriginLanguage(destLanguage);
    setDestLanguage(temp); 
  }

  function Translate(language: string, entry:string) {
    
    let lang1: string;
    let lang2: string;
    if (language == "Português") {
      lang1 = "PT";
      lang2 = "KK";
    } else {
      lang1 = "KK"
      lang2 = "PT"
    }

    for (let index = 0; index < Object(Dictionary).length; index++) {
      if(entry.toLowerCase() == Object(Dictionary[index])[lang1].toLowerCase()) {
        wordObject = Dictionary[index];
        return wordObject[lang2];
      }
    }

    wordObject = null;
    if (entry != "") {
      return "Tradução não encontrada";
    }
  }

  function setLabel(language:string) {
    if (wordObject != null) {
      return "Frase em " + language + '\n';
    }
  }

  function getExample(language:string) {
    
    let lang: string;
    if (language == "Português") {
      lang = "PT";
    } else {
      lang = "KK";
    }
    
    if (wordObject != null) {
      let att = String();
      att = att.concat("EX", lang);
      let text = "";

      if (language == "Português" || !wordObject[att.concat("F")]) {
        text = wordObject[att];     
      }
      else {
        text = text.concat("(H) ", wordObject[att]);
        att = "";
        att = att.concat("EX", lang, "F");
        text = text.concat("\n(M) ", wordObject[att]);
        
      }
      return text
    }
  }


  return (
    // Main View
    <ScrollView style={styles.scrollBar}>
      <StatusBar translucent backgroundColor={"#f23232"}/>
      <SafeAreaView style={styles.container}>
        {/* Logo area */}
        <View style={styles.logoArea}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <Text style={styles.windowName}>Tradução</Text>
        </View>

        {/* Change language area */}
        <View style={styles.changeLanguage}>
          {/* First language */}
          <View style={styles.originLanguageArea}>
            <Text style={styles.originLanguage}>{originLanguage}</Text>
          </View>

          {/* Change language icon */}
          <View style={styles.languageExchangeArea}>
            <TouchableWithoutFeedback onPress={changeLanguage}>
              <Image
                style={styles.languageExchange}
                source={require("./assets/exchange.png")}
              />
            </TouchableWithoutFeedback>
          </View>

          {/* Second Language */}
          <View style={styles.destLanguageArea}>
            <Text style={styles.destLanguage}>{destLanguage}</Text>
          </View>
        </View>

        {/* Text box for the user entry */}
        <View style={styles.userInput}>
          <TextInput
            style={styles.textBox}
            placeholder="Toque para digitar"
            onChangeText={(word) => setTranslation(word)}
          />
        </View>
        
        {/* Translate answer */}
        <View style={styles.translationArea}>

          <Text style={styles.translatedWord}>
            {Translate(originLanguage, translation)}
          </Text>

          <View style={styles.exampleArea}>

            <Text style={styles.label}>
              {setLabel(originLanguage)}
            </Text>
            <Text style={styles.examples}>
              {getExample(originLanguage)}
            </Text>
          </View>

          <View style={styles.exampleArea}>

            <Text style={styles.label}>
              {setLabel(destLanguage)}
            </Text>
            <Text style={styles.examples}>
              {getExample(destLanguage)}
            </Text>

          </View>

          
          
        </View>

        {/* Historic */}
        <View style={styles.historyArea}>
          <Text style={styles.historyText}>Histórico</Text>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

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
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flex: 0.085,
    backgroundColor: "#FFF",
  },
  textBox: {
    flex: 1,
    textAlign: "left",
    fontSize: 18,
    paddingLeft: 23,
  },
  translationArea: {
    width: "100%",
    flex: 0.45,
    backgroundColor: "#FFF",
    borderBottomWidth: 1.5,
    borderTopWidth: 1,
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
    flex: 1,
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 17,
  },
  examples: {
    fontSize: 20,
    height: '100%',
  },
  historyArea: {
    flexDirection: "row",
    marginTop: 10,
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

export default App;
