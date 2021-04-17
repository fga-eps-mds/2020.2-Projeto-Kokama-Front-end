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
        paddingVertical: 15,
        justifyContent: "space-around",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: Colors.DARK_GRAY,
        backgroundColor: Colors.LIGHT_GRAY,
    },
    activityTitle: {
        textAlign: "center",
        fontSize: 30,
        color: Colors.BLACK,
    },
    nextActivity: {
    },
    activityPhraseArea: {
        maxWidth: screen.width,
        marginTop: 15,
        paddingVertical: 10
    },
    activityPhrasePortuguese: {
        textAlign: "center",
        textAlignVertical: "top",
        fontSize: 18,
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
    optionsArea: {
        flexDirection: "row",
        padding: 20,
        marginTop: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    optionsRow: {
        marginBottom: 10,
    },
    option: {
        borderWidth: 1,
        borderColor: Colors.RED,
        borderRadius: 10,
        width: 135,
        padding: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    
    optionText: {
        fontSize: 20,
    },

    buttonArea: {
        alignItems: "center",
    },

    button: {
        backgroundColor: Colors.RED,
        width: 200,
        padding: 10,
        // borderRadius: 20,
    },
    
    buttonText: {
        textAlign: "center",
        color: Colors.WHITE,
        fontSize: 20,
    }
});

export default styles;