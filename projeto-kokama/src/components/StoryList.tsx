import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../assets/Colors";
import { KokamaStories } from "../screens/KokamaStories/interface";


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

const StoryList = (props: Props) => {

    let [newList, setNewList] = useState<Array<KokamaStories>>([]);

    // interface Props {
    //     list: KokamaStories[];
    //     language: string;
    // }


    function getCorrectStories(oldlist: KokamaStories[]) {
        // let list:Array<KokamaStories> = [];
        if (originLanguage == "Kokama") {
            for (let story of oldlist) {
                console.log(1)
                if (story.title_kokama != "") {
                    console.log(2)
                    newList = oldlist;
                } else {
                    console.log(3)
                    newList = [];
                }
            }
        } else {
            for (let story of oldlist) {
                console.log(4)
                if (story.title_portuguese != "") {
                    console.log(5)
                    newList = oldlist;
                } else {
                    console.log(6)
                    newList = [];
                }
            }
        }
        return newList;
    }
    return (
        {originLanguage == "Kokama" && (
            <View>
                {kokamaStories.map((story: KokamaStories, index: number) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                        <View style={styles.titleArea}>
                            <Text style={styles.title}>{story.title_kokama}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        )||(
            <View>
                {kokamaStories.map((story: KokamaStories, index: number) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.push('História', { story })}>
                        <View style={styles.titleArea}>
                            <Text style={styles.title}>{story.title_portuguese}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        )}
    );
};

export default StoryList;
