import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../assets/Colors";
import { KokamaStories } from "../screens/KokamaStories/interface";
import React, { useEffect, useState } from "react";


const styles = StyleSheet.create({
    Area: {
        flexDirection: "column",
        backgroundColor: Colors.WHITE,
        borderBottomWidth: 1.5,
        borderColor: Colors.DARK_GRAY,
    },
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
    list: KokamaStories[];
    language: string;
}


const StoryList = (props: Props, navigation) => {
    const [newList, setNewList] = useState<Array<KokamaStories>>([]);

    function getCorrectStories(oldlist: KokamaStories[]) {
        let list: KokamaStories[] = [];
        if (props.language == "Kokama") {
            for (let story of oldlist) {
                if (story.title_kokama != "") {
                    list.unshift(story);
                }
            }
        } else {
            for (let story of oldlist) {
                if (story.title_portuguese != "") {
                    list.unshift(story);
                }
            }
        }
        return list;
    }

    if (newList != getCorrectStories(props.list)) {
        setNewList(getCorrectStories(props.list));
    }

    return (
        <View>
            {props.language == "Kokama" && (
                <View>
                    {newList.map((story: KokamaStories, index: number) => (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                            <View style={styles.titleArea}>
                                <Text style={styles.title}>{story.title_kokama}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            ) || (
                <View>
                    {newList.map((story: KokamaStories, index: number) => 
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}> 
                            <View style={styles.titleArea}>
                                <Text style={styles.title}>{story.title_portuguese}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>
            )}
        </View>
    );
}

export default StoryList;