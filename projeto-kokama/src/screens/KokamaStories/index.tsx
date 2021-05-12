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
import {
    PORTUGUESE,
    KOKAMA,
} from "../../config/constants";
import StoryList from "../../components/StoryList";

export default function Stories() {
    const [kokamaStories, setKokamaStories] = useState<Array<KokamaStories>>();
    const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
    const [destLanguage, setDestLanguage] = useState(KOKAMA);
    if (originLanguage == "") {
        setOriginLanguage(PORTUGUESE);
    }    
    console.log("bonitinha")


    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/7c65553d-7f08-4368-8a19-97c460dc39e4"
            );
            if (result.status === 200 && kokamaStories != result.data) {
                console.log("Chegou")
                setKokamaStories(result.data);
                console.log("As histórias foram atualizadas corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
    }, []);

    function exchangeLanguage() {
        if (originLanguage === PORTUGUESE) {
            setOriginLanguage(KOKAMA);
            setDestLanguage(PORTUGUESE);
        } else {
            setOriginLanguage(PORTUGUESE);
            setDestLanguage(KOKAMA);
        }
    }
    
    return (
        <SafeAreaView>
            {kokamaStories && kokamaStories.length == 0 && (
                <SpinnerLoading />
            )}
            {kokamaStories && kokamaStories.length > 0 && (
                <ScrollView style={styles.container}>
                    <View style={styles.area}>
                        <View style={styles.searchBarBox}>
                            <SearchBar />
                            <View style={styles.swapButton}>
                                <TouchableWithoutFeedback onPress={exchangeLanguage}>
                                    <Icon name="swap" size={40} />
                                </TouchableWithoutFeedback>
                                <Text>{originLanguage}</Text>
                            </View>
                        </View>
                        <StoryList 
                            list={kokamaStories} 
                            language={originLanguage || ""}
                        />
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}