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
import Icon from "react-native-vector-icons/AntDesign";
import {
    PORTUGUESE,
    KOKAMA,
} from "../../config/constants";
import StoryList from "../../components/StoryList";
import { SearchBar } from 'react-native-elements';
import { LEARN_MICROSERVICE_URL } from "@env"


export default function Stories() {
    const [kokamaStories, setKokamaStories] = useState<Array<KokamaStories>>();
    const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
    const [search, setSearch] = useState("");
    if (originLanguage == "") {
        setOriginLanguage(PORTUGUESE);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                LEARN_MICROSERVICE_URL + "ensino/lista_de_historias/?format=json"
            );
            if (result.status === 200 && kokamaStories != result.data) {
                setKokamaStories(result.data);
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
        }
        fetchData();
    }, []);

    function exchangeLanguage() {
        if (originLanguage === PORTUGUESE) {
            setOriginLanguage(KOKAMA);
        } else {
            setOriginLanguage(PORTUGUESE);
        }
    }

    return (
        <SafeAreaView>
            {kokamaStories && kokamaStories.length == 0 && (
                <SpinnerLoading />
            )}
            {kokamaStories && kokamaStories.length > 0 && (
                <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
                    <View style={styles.searchBarArea}>
                        <SearchBar
                            placeholder="Pesquise aqui..."
                            onChangeText={setSearch}
                            value={search}
                            platform="android"
                            containerStyle={ styles.searchBar }
                        />

                        <View style={styles.swapButtonArea}>
                            <TouchableWithoutFeedback onPress={exchangeLanguage}>
                                <Icon name="swap" size={40} />
                            </TouchableWithoutFeedback>
                            <Text>{originLanguage}</Text>
                        </View>
                    </View>
                    <StoryList
                        search={search}
                        list={kokamaStories}
                        language={originLanguage || ""}
                    />
                </ScrollView>
            )}
        </SafeAreaView>
    );
}