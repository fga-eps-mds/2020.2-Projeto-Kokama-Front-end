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
    searchBarArea: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        backgroundColor: Colors.WHITE,
    },
    searchBar: {
        flex: 4,
    },
    swapButtonArea: {
        flex: 1,
        height: "100%",
        alignItems:"center",
        marginHorizontal: 5, 
    },
});

export default styles;