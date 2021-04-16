import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import {createBlankSpace} from "../../utils/activity";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function shuffle(list:Array<any>) {
    var currentIndex = list.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }
    return list;
}


export default function Activity({ navigation }) {
    const [activities, setActivities] = useState<Array<Exercise>>([]);
    let index:number = 4;
    let randomOptions:Array<number> = [0, 1, 2, 3];

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/913b3b38-fa2a-40d4-8f40-171563bb604a"
            );
            if (result.status === 200) {
                // setActivities(result.data);
                setActivities(shuffle(result.data));
                console.log("Os exercícios foram atualizados corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
        randomOptions = shuffle(randomOptions)
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

                            <TouchableWithoutFeedback style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[0]]}</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[1]]}</Text>
                            </TouchableWithoutFeedback>

                        </View>

                        <View style={styles.optionsRow}>
                            <TouchableWithoutFeedback style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[2]]}</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[3]]}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.buttonArea}>
                        <TouchableWithoutFeedback style={styles.button} onPress={() => {}}>
                            <Text style={styles.buttonText}>
                                Confirmar
                            </Text>
                        </TouchableWithoutFeedback>
                        
                    </View>             
                    
                </ScrollView>

            )}
        </SafeAreaView>
    );
}