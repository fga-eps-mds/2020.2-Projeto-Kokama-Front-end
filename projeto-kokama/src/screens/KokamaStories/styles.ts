import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        maxWidth: screen.width,
        height: window.height,
        backgroundColor: Colors.LIGHT_GRAY,
    },
    textBox: {
        display: "flex",
        flex: 6,
        textAlign: "left",
        fontSize: 20,
        paddingLeft: 23,
        paddingVertical: 7,
    },
    userInput: {
        display: "flex",
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: Colors.DARK_GRAY,
        backgroundColor: Colors.WHITE,
        alignItems: "center",
    },
    area: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: Colors.WHITE,
        borderBottomWidth: 1.5,
        borderColor: Colors.DARK_GRAY,
        fontSize: 18,
    },
    titleArea: {
        display: "flex",
        width: "100%",
        textAlignVertical: "center",
        textAlign: "left",
        fontSize: 18,
        marginTop: 5,
        // borderTopWidth: 1.5,
        // borderBottomWidth: 1.5,
        // borderColor: Colors.DARK_GRAY,
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
    storyCardTitle: {
        borderWidth: 5,
        backgroundColor: "#f23232",
    },
});

export default styles;