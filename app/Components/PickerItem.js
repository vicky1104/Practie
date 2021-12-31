import React from "react";
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import color from "../config/color";
function PickerItem({ label, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={color.lightGrey}
      style={{ marginTop: 15 }}
      onPress={onPress}
    >
      <View style={styles.batch}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    fontSize: 18,
    marginBottom: 8,
    display: "flex",
    flexDirection: "column",
  },
  batch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default PickerItem;
