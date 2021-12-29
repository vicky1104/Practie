import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";

function Chip(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialCommunityIcons name="check-bold" size={20} />
        <Text style={styles.text}>Prototyping</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="check-bold" size={20} />
        <Text style={styles.text}>Prototyping</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="check-bold" size={20} />
        <Text style={styles.text}>Prototyping</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="check-bold" size={20} />
        <Text style={styles.text}>sd</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="check-bold" size={20} />
        <Text style={styles.text}>Prototyping</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: color.lightGrey,
  },
  text: { color: "grey", fontWeight: "900", fontSize: 20, paddingLeft: 10 },
});

export default Chip;
