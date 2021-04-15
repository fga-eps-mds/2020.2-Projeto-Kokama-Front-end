import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import {createBlankSpace} from "../../utils/activity";

function shuffle(activities:Array<Exercise>) {
    var currentIndex = activities.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = activities[currentIndex];
      activities[currentIndex] = activities[randomIndex];
      activities[randomIndex] = temporaryValue;
    }
    return activities;
  }


export default function Activity({ navigation }) {
    const [activities, setActivities] = useState<Array<Exercise>>([]);
    let index:number = 0

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/1c69142c-1816-4915-846b-dfc0eb6346d7"
            );
            if (result.status === 200) {
                setActivities(shuffle(result.data));
                console.log("Os exercícios foram atualizados corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.contentArea}>
            {activities.length == 0 && (
                <SpinnerLoading />
            )}
            {activities.length > 0 && (
                <ScrollView
                    keyboardShouldPersistTaps={"always"} 
                >
                    <View style={styles.activityTitleArea}>
                        <Text style={styles.activityTitle}>
                            Exercício { activities[index].id }
                        </Text>
                    </View>

                    <View style={styles.activityPhraseArea}>
                        <Text style={styles.activityPhrasePortuguese}>
                            {activities[index].phrase_portuguese}
                        </Text>
                        <Text style={styles.activityPhraseKokama}>
                            {activities[index].phrase_kokama
                            /* {createBlankSpace(
                                activities[index].phrase_kokama,
                                activities[index].options[0],
                                "kokama"
                            )} */}
                        </Text>
                    </View>
                    
                </ScrollView>
            )}
        </SafeAreaView>
    );
}