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
    apoiadores: {
        display: 'flex',
        padding: 20,
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
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
    }
});

export default styles;