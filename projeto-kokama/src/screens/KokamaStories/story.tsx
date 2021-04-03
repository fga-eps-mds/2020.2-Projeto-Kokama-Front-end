import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView
} from "react-native";
import React, { useEffect } from "react";
import storyStyle from "./styles";
import { KokamaStories } from "./interface"

export default function Story(props:KokamaStories){
    return(
        <SafeAreaView>
            <ScrollView
            style={storyStyle.container}
            >
                <Text>
                    {props.texto}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}