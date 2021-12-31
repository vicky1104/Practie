import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import color from "../config/color";

function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.txt, style]}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: color.black,
    fontWeight: "300",
  },
});

export default AppText;
