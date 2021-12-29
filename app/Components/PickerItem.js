import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import color from "../config/color";

function PickerItem({ label, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={color.lightGrey}
      style={{ marginTop: 15 }}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
});

export default PickerItem;
