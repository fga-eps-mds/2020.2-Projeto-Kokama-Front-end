import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import Colors from "../../assets/Colors";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const storyStyle = StyleSheet.create({

    container: {
        maxWidth: screen.width,
        height: window.height,
        backgroundColor: Colors.LIGHT_GRAY,
    },
    textBox: {
        flex: 6,
        textAlign: "left",
        fontSize: 20,
        paddingLeft: 23,
    },
    userInput: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.DARK_GRAY,
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between",
      },

});
export default storyStyle;