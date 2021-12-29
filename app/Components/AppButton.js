import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AppText from "../AppText/AppText";
import color from "../config/color";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.view, style]} onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // width: "100%",
  },
  text: {
    fontWeight: "bold",
    color: color.white,
  },
});

export default AppButton;
