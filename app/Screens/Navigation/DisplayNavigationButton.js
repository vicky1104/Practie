import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import color from "../../config/color";

function DisplayNavigationButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={30}
          color={color.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderWidth: 10,
    borderColor: color.white,
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: color.primary,
  },
});

export default DisplayNavigationButton;
