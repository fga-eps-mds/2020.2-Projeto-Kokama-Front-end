import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import {createBlankSpace} from "../../utils/activity";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Colors from "../../assets/Colors";

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

function checkOptions(option:number){
    if(option == 0){
        return true;
    }else{
        return false;
    }
}

let randomOptions:Array<number> = shuffle([0, 1, 2, 3]);

export default function Activity({ navigation }) {
    const [activities, setActivities] = useState<Array<Exercise>>([]);
    const [confirmAnswer, setConfirmAnswer] = useState<Boolean>(false);
    const [optionChoice, setOptionChoice] = useState<Boolean>(false);
    let index:number = 0;

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/913b3b38-fa2a-40d4-8f40-171563bb604a"
            );
            if (result.status === 200) {
                //setActivities(result.data);
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
                    {!confirmAnswer && ( 
                    <View style={styles.optionsArea}>

                        <View style={styles.optionsRow}>
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[0]))}} style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[0]]}</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[1]))}} style={styles.option}>
                                    <Text style={styles.optionText}>{activities[index].options[randomOptions[1]]}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.optionsRow}>
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[2]))}} style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[2]]}</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[3]))}} style={styles.option}>
                                <Text style={styles.optionText}>{activities[index].options[randomOptions[3]]}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                     ) || (
                    <View style={styles.optionsArea}>

                        <View style={styles.optionsRow}>
                            {checkOptions(randomOptions[0]) &&(
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[0]))}} style={[styles.option,{backgroundColor:Colors.GREEN}]}>
                                <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[0]]}</Text>
                            </TouchableWithoutFeedback>
                            ) || (
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[0]))}} style={[styles.option,{backgroundColor:Colors.RED}]}>
                                <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[0]]}</Text>
                            </TouchableWithoutFeedback> 
                            )}
                            {checkOptions(randomOptions[1]) &&(
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[1]))}} style={[styles.option,{backgroundColor:Colors.GREEN}]}>
                                <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[1]]}</Text>
                            </TouchableWithoutFeedback>
                            ) || (
                            <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[1]))}} style={[styles.option,{backgroundColor:Colors.RED}]}>
                                <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[1]]}</Text>
                            </TouchableWithoutFeedback> 
                            )}
                        </View>
                        <View style={styles.optionsRow}>
                            {checkOptions(randomOptions[2]) &&(
                                <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[2]))}} style={[styles.option,{backgroundColor:Colors.GREEN}]}>
                                    <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[2]]}</Text>
                                </TouchableWithoutFeedback>
                                ) || (
                                <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[2]))}} style={[styles.option,{backgroundColor:Colors.RED}]}>
                                    <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[2]]}</Text>
                                </TouchableWithoutFeedback> 
                            )}
                            {checkOptions(randomOptions[3]) &&(
                                <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[3]))}} style={[styles.option,{backgroundColor:Colors.GREEN}]}>
                                    <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[3]]}</Text>
                                </TouchableWithoutFeedback>
                                ) || (
                                <TouchableWithoutFeedback onPress = {()=>{setOptionChoice(checkOptions(randomOptions[3]))}} style={[styles.option,{backgroundColor:Colors.RED}]}>
                                    <Text style={[styles.optionText, {color: Colors.WHITE}]}>{activities[index].options[randomOptions[3]]}</Text>
                                </TouchableWithoutFeedback> 
                            )}
                        </View>
                    </View>
                     )}
                    <View style={styles.buttonArea}>
                        <TouchableWithoutFeedback style={styles.button} onPress={() => {setConfirmAnswer(true)}}>
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