import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    bottom: 39,
    borderColor: "#000",
    borderWidth: 2,
    flexDirection: "row",
    marginVertical: 10,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  left: {
    flex: 1,
    flexDirection: "row",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
  },

  title: {
    color: "lightgray",
    fontSize: 12,
    fontWeight: "bold",
    margin: 2,
  },

  dot: {
    color: "gray",
    fontSize: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  artist: {
    color: "gray",
    fontSize: 12,
    margin: 2,
  },
});

export default styles;
