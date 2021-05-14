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
import { LEARN_MICROSERVICE_URL } from "@env";
import NetInfo from '@react-native-community/netinfo';


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
let dataActivities: Array<Exercise> = ([]);

export default function Activity({ navigation }) {
  const [activities, setActivities] = useState<Array<Exercise>>([]);
  const [clicked, setClicked] = useState<number>(-1);
  const [isConnected, setIsConnected] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api(
        LEARN_MICROSERVICE_URL + "ensino/atividades/"
      );
      if (result.status === 200) {
        dataActivities = result.data;
        setActivities(shuffle(dataActivities));

      }
    };
    fetchData();
  }, []);

  function nextActivity() {
    setClicked(-1);
    setActivities(shuffle(activities));
    if (index === activities.length - 1) {
      setIndex(0);
    } else {
      setIndex(index+1);
    }
    randomOptions = shuffle([0, 1, 2, 3]);
  }

  return (
    <SafeAreaView style={styles.contentArea}>
      {activities.length == 0 && <SpinnerLoading />}
      {activities.length > 0 && isConnected && (
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
                onPress={() => { setClicked(0); }}
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

          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                nextActivity();
              }}
              style={styles.nextActivity}
            >
              <Text style={styles.nextText}>
                Próximo
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      ) || (activities.length > 0 && (
        <Text style={styles.notConectedTitle}>
          Sem acesso à internet!
        </Text>)
        )
      }
    </SafeAreaView>
  );
}
