import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import AppCard from "./AppCard";
import ProfilePic from "../assets/bullet.jpg";
import AppText from "../AppText/AppText";
import color from "../config/color";

function ListDetails({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <AppCard
        image={route.params.images[0].url}
        title={route.params.title}
        subTitle={route.params.price}
      />

      <View style={styles.imgContainer}>
        <Image style={styles.img} source={ProfilePic} />
        <View style={styles.text}>
          <AppText style={styles.name}>Vicky Chauhan</AppText>
          <AppText style={styles.gmail}>
            {route.params.images.length} listings
          </AppText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    display: "flex",
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: color.creame,
    padding: 10,
  },
  img: { height: 70, width: 70, borderRadius: 50 },
  text: { marginVertical: 5, marginLeft: 10 },
  name: { fontWeight: "bold" },
  gmail: { marginVertical: 2, color: "grey" },
});

export default ListDetails;
