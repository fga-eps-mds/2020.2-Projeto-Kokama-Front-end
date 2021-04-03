import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
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
    historyText: {
        textAlign: "left",
        fontSize: 20,
        paddingLeft: 23,
        color: Colors.TEXT,
    },
    historyCard: {
        height: 150,
        width: screen.width,
    },
});

export default styles;