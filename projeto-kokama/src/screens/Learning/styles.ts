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
    cardTitle: {
        fontSize: 20,
        paddingLeft: 15,
        marginVertical: 10,
        color: Colors.TEXT,
    },
    cardImage: {
        height: 150,
        width: screen.width,
    },
});

export default styles;