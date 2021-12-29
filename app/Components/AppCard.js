import React from "react";
import { View, StyleSheet, Image } from "react-native";
import color from "../config/color";
import AppText from "../AppText/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function AppCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image resizeMode="cover" style={styles.img} source={{ uri: image }} />
        <View style={styles.textView}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>$ {subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: "95%",
    alignSelf: "center",
    height: "auto",
    borderRadius: 20,
    backgroundColor: color.white,
    marginBottom: 20,
    justifyContent: "center",
    overflow: "hidden",
  },
  textView: { paddingLeft: 20, paddingBottom: 10 },
  img: { height: 200, width: "100%" },
  title: { marginTop: 10, marginBottom: 5, fontSize: 18 },
  subtitle: { color: color.cyan, fontSize: 16 },
});

export default AppCard;
