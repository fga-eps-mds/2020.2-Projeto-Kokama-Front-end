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
    EPS: {
        display: 'flex',
        maxHeight: 220,
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 10,
        borderColor: Colors.LIGHT_GRAY,
    },
    MDS: {
        display: 'flex',
        maxHeight: 250,
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 10,
        borderColor: Colors.LIGHT_GRAY,
    },
    photo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    photos: {
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 250,
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
});

export default styles;

