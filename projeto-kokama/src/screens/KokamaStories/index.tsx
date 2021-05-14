import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { KokamaStories } from "./interface";
import Api from "../../api/Api";
import SpinnerLoading from "../../components/SpinnerLoading";
import {LEARN_MICROSERVICE_URL} from "@env"

export default function Stories({ navigation }) {
    const [kokamaStories, setKokamaStories] = useState<Array<KokamaStories>>([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                LEARN_MICROSERVICE_URL+"ensino/lista_de_historias/?format=json"
            );
            if (result.status === 200) {
                setKokamaStories(result.data);
                console.log("As histórias foram atualizadas corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView>
            {kokamaStories.length == 0 && (
                <SpinnerLoading />
            )}
            {kokamaStories.length > 0 && (
                <ScrollView style={styles.container}>
                    <View style={styles.area}>
                        <View>
                            {kokamaStories.map((story: KokamaStories, index: number) => (
                                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                                    <View style={styles.titleArea}>
                                        <Text style={styles.title}>{story.title} </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}