import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles, { getStyleOption } from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import { createBlankSpace, removeMarkers } from "../../utils/activity";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LEARN_MICROSERVICE_URL } from "@env";
import NetInfo from '@react-native-community/netinfo';
import { KOKAMA, PORTUGUESE } from "../../config/constants";



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
    let unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    const fetchData = async () => {
      const result = await Api(
        LEARN_MICROSERVICE_URL + "ensino/atividades/"
      );
      if (result.status === 200) {
        dataActivities = result.data;
        setActivities(shuffle(dataActivities));
      }
      return () => {
        unsubscribe();
      };
    };
    fetchData();
  }, []);

  function nextActivity() {
    setClicked(-1);
    setActivities(shuffle(activities));
    if (index === activities.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    randomOptions = shuffle([0, 1, 2, 3]);
  }

  return (
    <SafeAreaView style={styles.contentArea}>
      {activities.length == 0 && <SpinnerLoading />}
      {activities.length > 0 && isConnected && (
        <ScrollView keyboardShouldPersistTaps={"always"}>
          {clicked === -1 && (
            <View style={styles.activityPhraseArea}>
              <Text style={styles.activityPhrasePortuguese}>
                {createBlankSpace(
                  activities[index].phrase_portuguese,
                  PORTUGUESE
                )}
              </Text>

              <Text style={styles.activityPhraseKokama}>
                {createBlankSpace(
                  activities[index].phrase_kokama,
                  activities[index].options[0],
                  KOKAMA
                )}
              </Text>
            </View>
          ) || (
              <View style={styles.activityPhraseArea}>
                <Text style={styles.activityPhrasePortuguese}>
                  {
                    removeMarkers(activities[index].phrase_portuguese)
                  }
                </Text>

                <Text style={styles.activityPhraseKokama}>
                  {
                    removeMarkers(activities[index].phrase_kokama)
                  }
                </Text>
              </View>
            )}
          <View style={styles.optionsArea}>
            <View style={styles.optionsRow}>
              <TouchableWithoutFeedback
                onPress={() => { setClicked(0); }}
                style={getStyleOption(clicked, randomOptions[0] === 0, 0)}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[0]].toLowerCase()}
                </Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(1);
                }}
                style={getStyleOption(clicked, randomOptions[1] === 0, 1)}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[1]].toLowerCase()}
                </Text>
              </TouchableWithoutFeedback>

            </View>
            <View style={styles.optionsRow}>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(2);
                }}
                style={getStyleOption(clicked, randomOptions[2] === 0, 2)}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[2]].toLowerCase()}
                </Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setClicked(3);
                }}
                style={getStyleOption(clicked, randomOptions[3] === 0, 3)}
              >
                <Text style={styles.optionText}>
                  {activities[index].options[randomOptions[3]].toLowerCase()}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={1.0}
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
