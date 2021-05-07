import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import { createBlankSpace } from "../../utils/activity";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function shuffle(list: Array<any>) {
  var currentIndex = list.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = list[currentIndex];
    list[currentIndex] = list[randomIndex];
    list[randomIndex] = temporaryValue;
  }
  return list;
}
let randomOptions: Array<number> = shuffle([0, 1, 2, 3]);

export default function Activity({ navigation }) {
  const [activities, setActivities] = useState<Array<Exercise>>([]);
  const [clicked, setClicked] = useState<number>(-1);  
  let index: number = 0;
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await Api(
        "https://run.mocky.io/v3/913b3b38-fa2a-40d4-8f40-171563bb604a"
      );
      if (result.status === 200) {
        // setActivities(shuffle(result.data));
        setActivities(result.data);
      }
    };
    fetchData();
    
  }, []);

  

  return (

    <SafeAreaView style={styles.contentArea}>
      {activities.length == 0 && <SpinnerLoading />}
      {activities.length > 0 && (
        <ScrollView keyboardShouldPersistTaps={"always"}>

          <View style={styles.activityPhraseArea}>
            <Text style={styles.activityPhrasePortuguese}>
              {createBlankSpace(
                activities[index].phrase_portuguese,
                "portuguese"
              )}
            </Text>

            <Text style={styles.activityPhraseKokama}>
              {createBlankSpace(
                activities[index].phrase_kokama,
                activities[index].options[0],
                "kokama"
              )}
            </Text>
          </View>

          <View style={styles.optionsArea}>
            <View style={styles.optionsRow}>

              <TouchableWithoutFeedback
                onPress={() => {setClicked(0); }}
                style={[styles.option, (clicked !== -1 && randomOptions[0] === 0 ? styles.greenBorder :
                  (clicked === 0 ? styles.redBorder : styles.option))]}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[0]]}
                </Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(1);
                }}
                style={[styles.option, (clicked !== -1 && randomOptions[1] === 0 ? styles.greenBorder :
                  (clicked === 1 ? styles.redBorder : styles.option))]}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[1]]}
                </Text>
              </TouchableWithoutFeedback>

            </View>
            <View style={styles.optionsRow}>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(2);
                }}
                style={[styles.option, (clicked !== -1 && randomOptions[2] === 0 ? styles.greenBorder :
                   (clicked === 2 ? styles.redBorder : styles.option))]}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[2]]}
                </Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(3);
                }}
                style={[styles.option, (clicked !== -1 && randomOptions[3] === 0 ? styles.greenBorder :
                  (clicked === 3 ? styles.redBorder : styles.option))]}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[3]]}
                </Text>
              </TouchableWithoutFeedback>
              
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
