import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

// Constants and Global Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
    contentArea: {
        maxWidth: screen.width,
        height: window.height,
        backgroundColor: Colors.WHITE,
    },
    activityTitleArea: {
        maxWidth: screen.width,
        height: 80,
        marginTop: 55,
        justifyContent: 'center',
        borderWidth: 2, 
        borderColor: Colors.DARK_GRAY,
        backgroundColor: Colors.LIGHT_GRAY,
    },
    activityTitle: {
        textAlign: "center",
        fontSize: 30,
        color: Colors.BLACK,
    },
    activityPhraseArea: {
        maxWidth: screen.width,
        height: 250,
    },
    activityPhrasePortuguese: {
        textAlign: "center",
        textAlignVertical: "top",
        fontSize: 18,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        color: Colors.TEXT,
    },
    activityPhraseKokama: {
        textAlign: "center",
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        color: Colors.BLACK,
    },
});

export default styles;