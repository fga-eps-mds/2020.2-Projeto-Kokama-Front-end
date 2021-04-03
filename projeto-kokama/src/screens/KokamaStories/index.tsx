import {
    View,
    TextInput, 
    TouchableWithoutFeedback, 
    ScrollView, 
    SafeAreaView
} from "react-native";
import React from "react";
import storyStyle from "./styles";
import Stories from "../../components/Stories"
import { kokamaStories } from "./interface"

let storiesK: kokamaStories[] = [
    {
        title: "historia1",
        text: "aleatória1",
    },
    {
        title: "historia2",
        text: "aleatória2",
    },
    {
        title: "historia3",
        text: "aleatória3",
    }
    
];

function viewStory (story: kokamaStories) {
    
}

export default function StoryScreen({ navigation }){
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
                        Story={storiesK}
                        onPressTitle = {navigation.push}
                    />
                        
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}