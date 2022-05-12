import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

function Start({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image source={require("../assets/logoff.png")} style={styles.logo} />
        <Text style={styles.text}>
          Pakistan's first virtual bike inspection toolkit
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 30,
  },
  logo: {
    width: "100%",
    height: "15%",
  },
});

export default Start;
