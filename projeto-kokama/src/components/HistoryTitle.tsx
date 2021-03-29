import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Colors from "../assets/Colors";
import { HistoryTuple } from "../screens/Translation/interface";

const styles = StyleSheet.create({
  TitleArea: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    marginTop: 5,
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Title: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 23,
    color: Colors.HISTORY_TEXT,
  },
  Icon: {
    marginRight: 25,
  },
});

interface Props {
  isEnabled: Boolean,
  data: HistoryTuple[],
  onPressTitle: () => void;
};

const HistoryTitle = (props:Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPressTitle}>
      <View style={styles.TitleArea}>
        
        <Text style={styles.Title}>
          Histórico
        </Text>

        {(props.isEnabled && props.data.length > 0 && (
          <View style={styles.Icon}>
            <Icon name="up" size={22} color={Colors.HISTORY_WORD_TEXT} />
          </View>
        )) || (
          <View style={styles.Icon}>
            <Icon name="down" size={22} color={Colors.HISTORY_WORD_TEXT} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HistoryTitle;
