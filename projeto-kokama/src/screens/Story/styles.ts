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
    titleField: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 10,
        marginTop: 10,
        fontSize: 20,
    },
    textField: {
        display: "flex",
        flexDirection: "column",
        textAlignVertical: "center",
        padding: 15,
        marginBottom: 20,
        fontSize: 20,
    },
});

export default styles;