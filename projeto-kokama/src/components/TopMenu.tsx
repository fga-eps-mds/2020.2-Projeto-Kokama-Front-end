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


const styles = StyleSheet.create({

  logoArea: {    
    borderColor: Colors.DARK_GRAY,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  
  logo: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },

  windowName: {
    fontSize: 15,
    marginBottom: 50,
    
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
