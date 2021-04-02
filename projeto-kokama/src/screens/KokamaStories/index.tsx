import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, Button,} from "react-native";
import React, { useState } from "react";
import storyStyle from "./styles";
import Stories from "../../components/Stories"
import { kokamaStories } from "./interface"

let storiesK: kokamaStories[] = [
    {
        title: "historia1",
        text: "luiz e umchato",
    },
    {
        title: "historia2",
        text: "luiz e umchato",
    },
    {
        title: "historia3",
        text: "luiz e umchato",
    }
    
];

function viewStory (story: kokamaStories) {
    
}

export default function StoryScreen(){
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
                        onPressTitle = {viewStory}
                    />
                    {/* <View style={storyStyle.titleArea}>
                        <Text style={storyStyle.Title}> Exemplo...</Text>
                    </View> */}
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}