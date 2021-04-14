import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback
} from "react-native";
import React, { useEffect, useState } from "react";
// import styles from "./styles";
import { Exercise } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";

export default function Activity({ navigation }) {
    const [activities, setActivities] = useState<Array<Exercise>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/b8a86f51-047c-4c66-9302-7f1ddae52dff"
            );
            if (result.status === 200) {
                setActivities(result.data);
                console.log("Os exercícios foram atualizados corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView>
            <Text>
                Bem vindo
            </Text>
            {/* {activities.length == 0 && (
                <SpinnerLoading />
            )}
            {activities.length > 0 && (
                <ScrollView style={styles.container}>
                    <View style={styles.area}>
                        <View>
                            {activities.map((story:Activity, index: number) => (
                                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                                    <View style={styles.titleArea}>
                                        <Text style={styles.title}>{story.titulo} </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )} */}
        </SafeAreaView>
    );
}