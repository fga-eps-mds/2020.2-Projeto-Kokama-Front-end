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

export default function Stories() {
    const [kokamaStories, setKokamaStories] = useState<Array<KokamaStories>>();
    const [originLanguage, setOriginLanguage] = useState(PORTUGUESE);
    const [destLanguage, setDestLanguage] = useState(KOKAMA);
    const [search, setSearch] = useState("");
    if (originLanguage == "") {
        setOriginLanguage(PORTUGUESE);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api(
                "https://run.mocky.io/v3/7c65553d-7f08-4368-8a19-97c460dc39e4"
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
            setDestLanguage(PORTUGUESE);
        } else {
            setOriginLanguage(PORTUGUESE);
            setDestLanguage(KOKAMA);
        }
    }

    return (
        <SafeAreaView>
            {kokamaStories && kokamaStories.length == 0 && (
                <SpinnerLoading/>
            )}
            {kokamaStories && kokamaStories.length > 0 && (
                <ScrollView style={styles.container}>
                    <View style={styles.area}>
                        <View style={styles.searchBarBox}>
                            <SearchBar
                                placeholder="Pesquise aqui..."
                                onChangeText={setSearch}
                                value={search}
                                platform="android"
                                containerStyle={{ width:300}}
                            />
                            <View style={styles.swapButtonArea}>
                                <TouchableWithoutFeedback onPress={exchangeLanguage}>
                                    <Icon name="swap" size={40}/>
                                </TouchableWithoutFeedback>
                                <Text>{originLanguage}</Text>
                            </View>
                        </View>
                        <StoryList
                            search={search}
                            list={kokamaStories}
                            language={originLanguage || ""}
                        />
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}