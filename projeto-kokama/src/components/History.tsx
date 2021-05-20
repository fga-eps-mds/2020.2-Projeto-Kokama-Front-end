import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../assets/Colors";
import { HistoryTuple } from "../screens/Translation/interface";
import HistoryTitle from "./HistoryTitle";
import { capitalizeFirstLetter } from "../utils/translation";

const styles = StyleSheet.create({
  Area: {
    flexDirection: "column",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1.5,
    borderColor: Colors.DARK_GRAY,
  },
  WordsArea: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: Colors.DARK_GRAY,
    paddingLeft: 23,
    paddingVertical: 7,
  },
  Words: {
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 18,
    color: Colors.HISTORY_WORD_TEXT,
  },
});

export interface Props {
  isEnabled: boolean;
  data: HistoryTuple[];
  onPressTitle: () => void;
  translateFrom: string;
  onPressWord: (kokamaWord:string, originLanguage:string) => void;
}

export const History = (props: Props) => {
  return (
    <View>
      <HistoryTitle
        isEnabled={props.isEnabled}
        data={props.data}
        onPressTitle={props.onPressTitle}
      />
      
      {props.data.length > 0 && props.isEnabled && (
        <View style={styles.Area}>
          {props.data.map((word: HistoryTuple, index: number) => (
            <TouchableWithoutFeedback
              testID='history' 
              key={index}
              onPress={() => props.onPressWord(word.kokama, props.translateFrom)}
            >
              <View style={styles.WordsArea}>
                <Text style={[styles.Words, { fontWeight: "bold", fontSize: 20 }]}>
                  {capitalizeFirstLetter(word.kokama)}
                </Text>
                <Text style={styles.Words}>
                  {capitalizeFirstLetter(word.portuguese)}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      )}
    </View>
  );
};

export default History;
