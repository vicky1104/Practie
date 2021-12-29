import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText/AppText";

function ErrorMessage({ error, visible }) {
  if (!visible && !error) return null;

  return (
    <View>
      <AppText style={styles.errText}>{error}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  errText: {
    color: "red",
    fontStyle: "italic",
  },
});
export default ErrorMessage;
