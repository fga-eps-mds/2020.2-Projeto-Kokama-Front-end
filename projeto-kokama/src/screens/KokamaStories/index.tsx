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
import SearchBar from "../../components/SearchBar";
import Icon from "react-native-vector-icons/AntDesign";

export default function Stories({ navigation }) {
    const [kokamaStories, setKokamaStories] = useState<Array<KokamaStories>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/c9ae454d-b760-450f-9aef-4b4710a94504"
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
                        <View style={styles.searchBarBox}>
                            <SearchBar/>
                            <TouchableWithoutFeedback>
                                <Icon name="swap" size={40} />
                            </TouchableWithoutFeedback>
                        </View>
                        <View>
                            {kokamaStories.map((story: KokamaStories, index: number) => (
                                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                                    <View style={styles.titleArea}>
                                        <Text style={styles.title}>{story.titulo} </Text>
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