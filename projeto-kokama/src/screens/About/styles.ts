import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GRAY,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 15,
  },
  about_view: {
    justifyContent:"center",
    marginBottom: 15,
  },
  about_text: {
    paddingHorizontal:40,
    lineHeight: 20,
    textAlign: 'justify', 
  },
  photoSection: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 10,
    borderColor: Colors.LIGHT_GRAY,
  },
  UnB: {
    display: "flex",
    maxHeight: 100,
    maxWidth: 100,
  },
  NovaCartografia: {
    display: "flex",
    maxHeight: 100,
    maxWidth: 200,
  },
});

export default styles;
