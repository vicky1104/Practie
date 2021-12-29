import React from "react";
import { TextInput, Text, StyleSheet, View, Platform } from "react-native";
import DefaultStyle from "../config/DefaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";

function AppTextInput({
  onChangeText,
  width = "100%",
  size,
  icon,
  ...otherProps
}) {
  return (
    <View style={styles.container} width={width}>
      <MaterialCommunityIcons
        style={{ paddingLeft: 8 }}
        name={icon}
        size={size}
        color="grey"
      />
      <TextInput
        style={[styles.input, DefaultStyle.text]}
        onChangeText={onChangeText}
        numberOfLines={3}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingLeft: 8,
    color: "black",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: DefaultStyle.color.creame,
    borderRadius: 25,
    height: 50,
  },
});
export default AppTextInput;
