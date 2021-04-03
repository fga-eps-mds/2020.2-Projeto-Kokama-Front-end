import {
    View,
    TextInput, 
    TouchableWithoutFeedback, 
    ScrollView, 
    SafeAreaView
} from "react-native";
import React, { useEffect, useState } from "react";
import storyStyle from "./styles";
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
            <ScrollView
            style={storyStyle.container}
            >
                <View style={storyStyle.Area}>
                    <View style={storyStyle.userInput}>
                        <TextInput
                            style={storyStyle.textBox}
                            placeholder="Toque para pesquisar"
                        />            
                    </View>
                        
                    <Stories
                        Story={kokamaStories}A
                        onPressTitle = {navigation.push}
                    />
                        
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}