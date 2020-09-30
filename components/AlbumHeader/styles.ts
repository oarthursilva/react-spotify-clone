import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  cover: {
    width: 200,
    height: 200,
    margin: 15,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    color: "gray",
    fontSize: 13,
    margin: 5,
  },

  button: {
    backgroundColor: "#1CD05D",
    height: 60,
    width: 175,
    margin: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0.285,
  },
});

export default styles;
