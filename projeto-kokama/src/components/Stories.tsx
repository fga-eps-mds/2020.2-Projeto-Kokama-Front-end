import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Colors from "../assets/Colors";
import { KokamaStories } from "../screens/KokamaStories/interface"


const storyStyle = StyleSheet.create({
    titleArea: {
        display: "flex",
        width: "100%",
        textAlignVertical: "center",
        textAlign: "left",
        fontSize: 18,
        marginTop: 5,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: Colors.DARK_GRAY,
        paddingLeft: 23,
        paddingVertical: 7,
    },
    title: {
        display: "flex",
        width: "100%",
        textAlignVertical: "center",
        textAlign: "left",
        fontSize: 18,
        color: Colors.HISTORY_WORD_TEXT,
    },
});

interface Props {
    onPressTitle: (acessStory: string) => void;
    Story: KokamaStories[];
}

const Stories = (props:Props) => {
    return(
        <View>
            {props.Story.map((story: KokamaStories, index:number) => (
                <TouchableWithoutFeedback key={index} onPress={() => props.onPressTitle('História')}>
                    <View style={storyStyle.titleArea}>
                        <Text style={storyStyle.title}> { story.titulo } </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
}
export default Stories;