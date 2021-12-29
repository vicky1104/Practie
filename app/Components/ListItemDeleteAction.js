import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import color from "../config/color";
import { AntDesign } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="delete" size={24} color={color.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.danger,
  },
});
export default ListItemDeleteAction;
