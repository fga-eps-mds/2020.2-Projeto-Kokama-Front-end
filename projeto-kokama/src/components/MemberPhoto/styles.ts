import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  photo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photos: {
    maxHeight: 80,
    maxWidth: 80,
    borderRadius: 250,
  },
});

export default styles;
