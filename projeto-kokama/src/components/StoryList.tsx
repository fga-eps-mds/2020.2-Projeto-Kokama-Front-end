import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../assets/Colors";
import { KokamaStories } from "../screens/KokamaStories/interface";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';


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
    emptyListMessage: {
        alignSelf: "center",
        fontSize: 18,
        marginTop: 50,
        
    },
});

interface Props {
    search: string;
    list: KokamaStories[];
    language: string;
}

function checkListKokama(oldlist: KokamaStories[], searchInput: string, search: string) {
    let list: KokamaStories[] = [];
    for (let story of oldlist) {
        if (story.title_kokama != "") {
            if (searchInput != "") {
                if (story.title_kokama.toLowerCase().includes(search)
                    || story.text_kokama.toLowerCase().includes(search)) {
                    list.unshift(story);
                }
            } else {
                list.unshift(story);
            }
        }
    }
    return list;
}

function checkListPortuguese(oldlist: KokamaStories[], searchInput: string, search: string) {
    let list: KokamaStories[] = [];
    for (let story of oldlist) {
        if (story.title_portuguese != "") {
            if (searchInput != "") {
                if (story.title_portuguese.toLowerCase().includes(search)
                    || story.text_portuguese.toLowerCase().includes(search)) {
                    list.unshift(story);
                }
            } else {
                list.unshift(story);
            }
        }
    }
    return list;
}

function getCorrectStories(oldlist: KokamaStories[],language: string, searchInput: string) {
    let list: KokamaStories[] = [];
    let search: string=searchInput.toLowerCase().trim();

    if (language == "Kokama") {
        list = checkListKokama(oldlist, searchInput, search);    
    
    } else {
        list = checkListPortuguese(oldlist, searchInput, search);            
    }
    return list;
}

const StoryList = (props: Props) => {
    let [newList] = useState<Array<KokamaStories>>([]);
    const navigation = useNavigation();

    if (newList != getCorrectStories(props.list, props.language, props.search)) {
        newList=getCorrectStories(props.list, props.language, props.search);
    }

    return (
        <View>
            {newList.length === 0 && (
                <Text style={styles.emptyListMessage}>Nenhuma história foi encontrada</Text>

            ) || (
                <View>
                    {props.language == "Kokama" && (
                        <View>
                            {newList.map((story: KokamaStories, index: number) => (
                                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story, language: props.language, })}>
                                    <View style={styles.titleArea}>
                                        <Text style={styles.title}>{story.title_kokama}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    ) || (
                        <View>
                            {newList.map((story: KokamaStories, index: number) => (
                                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story, language: props.language, })}> 
                                    <View style={styles.titleArea}>
                                        <Text style={styles.title}>{story.title_portuguese}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    )}
                </View>
            )}
        </View>
    );
}

export default StoryList;