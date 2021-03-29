import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import Colors from "../assets/Colors";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  logoArea: {
    flexDirection: "column",
    marginTop: STATUSBAR_HEIGHT,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: Colors.DARK_GRAY,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.LIGHT_GRAY,
  },
  logo: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  windowName: {
    fontSize: 20,
    marginBottom: 5,
  },
});

interface Props {
  name: string;
}

const TopMenu = (props: Props) => {
  return (
    <View>
      <StatusBar translucent backgroundColor={Colors.RED} />
      <View style={styles.logoArea}>
        <Image style={styles.logo} source={require("../assets/img/logo.png")} />
        <Text style={styles.windowName}>{props.name}</Text>
      </View>
    </View>
  );
};

export default TopMenu;
