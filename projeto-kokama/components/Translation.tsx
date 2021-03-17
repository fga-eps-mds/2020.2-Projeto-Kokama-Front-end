import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  changeLanguage,
  originLanguage,
  destLanguage,
  Translate,
  translation,
  setTranslation,
  setLabel,
  getExample,
} from "./Translation.functions";
import styles from '../style/Translation.component.style';
  
  
const app2 = () => {
  
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
  
  export default app2;