import {
  View,
  StyleSheet,
  Image,
  Button,
  FlatList,
  Text,
  Dimensions,
} from "react-native";

import React from "react";

const windowWidth = Dimensions.get("window").width;

const windowHeight = Dimensions.get("window").height;

var data = [
  {
    source: require("../assets/slide2.png"),
  },
  {
    source: require("../assets/slide3.png"),
  },
  {
    source: require("../assets/slide4.png"),
  },
  {
    source: require("../assets/slide5.png"),
  },
  {
    source: require("../assets/slide6.png"),
  },
  {
    source: require("../assets/slide7.png"),
  },
  {
    source: require("../assets/slide8.png"),
  },
];
export default function Slides() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={Item}
        keyExtractor={(item) => item.source}
        pagingEnabled
      />
    </View>
  );
}
const Item = ({ item }) => (
  <>
    <Image
      source={item.source}
      style={{
        marginTop: 75,
        width: windowWidth,
        height: windowHeight,
        alignSelf: "center",
        // borderWidth: 2,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderColor: "black",
      }}
      resizeMode="stretch"
    />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
