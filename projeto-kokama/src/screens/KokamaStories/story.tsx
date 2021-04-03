import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView
} from "react-native";
import React from "react";
import storyStyle from "./styles";
import { kokamaStories } from "./interface"

export default function Story(props:kokamaStories){
    return(
        <SafeAreaView>
            <ScrollView
            style={storyStyle.container}
            >
                <Text>
                    {props.text}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}