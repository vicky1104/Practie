import React from "react";
import { View, TouchableHighlight, StyleSheet, Image } from "react-native";
import AppText from "../AppText/AppText";
import color from "../config/color";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.img} source={image} />

          <View style={styles.text}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderRadius: 30,
    overflow: "hidden",
  },
  text: {
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    // marginBottom: 7,
  },
});
export default ListItem;
