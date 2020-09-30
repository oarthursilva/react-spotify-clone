import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },

  right: {
    marginLeft: 15,
    alignContent: "center",
    justifyContent: "space-around",
  },

  image: {
    width: 50,
    height: 50,
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  artist: {
    color: "lightgray",
    fontSize: 14,
  },
});

export default styles;
