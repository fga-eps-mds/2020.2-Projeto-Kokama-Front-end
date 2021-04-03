import { StyleSheet, Dimensions, View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Colors from "../assets/Colors";
import { kokamaStories } from "../screens/KokamaStories/interface"

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

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
    Title: {
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
    Story: kokamaStories[];
}

const Stories = (props:Props) => {
    return(
        <View>
            {props.Story.map((story: kokamaStories) => (
                <TouchableWithoutFeedback onPress={() => props.onPressTitle('História')}>
                    <View style={storyStyle.titleArea}>
                        <Text style={storyStyle.Title}> { story.title } </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}

        </View>
    );
}
export default Stories;