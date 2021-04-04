import {
    View,
    ScrollView, 
    SafeAreaView
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Stories from "../../components/Stories"
import { KokamaStories } from "./interface"
import Api from "../../api/Api";


export default function StoryScreen({ navigation }){
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
    
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.Area}>  
                    <Stories
                        Story={kokamaStories}
                        onPressTitle = {navigation.push}
                    /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}