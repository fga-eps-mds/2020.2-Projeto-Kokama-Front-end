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
    texts: {
        fontSize: 18,
        alignSelf: 'center',
    },
    equipes: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row', 
        justifyContent: "space-around",
    },
    UnB: {
        display: 'flex',
        maxHeight: 100,
        maxWidth: 100,
    },
    NovaCartografia: {
        display: 'flex',
        maxHeight: 100,
        maxWidth: 200,
    },
    integrantes: { 
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 250,
    }
});

export default styles;