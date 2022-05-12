import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function Home({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image source={require("../assets/logoff.png")} style={styles.logo} />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Bike Inspection");
          }}
        >
          <Text style={styles.buttonText}>Bike Inspection</Text>
        </Pressable>
        <View style={styles.buttonTag1}>
          <Text style={styles.tagText}>Basic</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Bike Inspection</Text>
        </Pressable>
        <View style={styles.buttonTag2}>
          <Text style={styles.tagText}>Advance</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Docs Inspection</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "gray",
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 220,
    height: 50,
  },
  button: {
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 30,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonTag1: {
    position: "absolute",
    backgroundColor: "red",
    width: "30%",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "65%",
    top: "50%",
    elevation: 40,
  },
  buttonTag2: {
    position: "absolute",
    backgroundColor: "green",
    width: "30%",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "65%",
    top: "75%",
    elevation: 40,
  },
  tagText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Home;
