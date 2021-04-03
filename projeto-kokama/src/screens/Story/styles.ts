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
    textField: {
        display: "flex",
        flexDirection: "column",
        textAlignVertical: "center",
        padding: 15,
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: Colors.DARK_GRAY,
        fontSize: 20,
    },

});
export default styles;