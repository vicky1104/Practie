import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableHighlight,
  FlatList,
} from "react-native";
import AppText from "../AppText/AppText";
import profilePic from "../assets/bullet.jpg";
import bg from "../assets/background.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";

function ProfileMessages({ routes }) {
  const data = [
    {
      id: 1,
      img: profilePic,
      title: "Vicky Chauhan",
      msg: "messages",
    },
    {
      id: 2,
      img: bg,
      title: "Hello",
      msg: "messages",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight underlayColor={color.lightwhite}>
            <View style={styles.view}>
              <Image style={styles.img} source={item.img} />

              <View style={styles.group}>
                <View style={styles.text}>
                  <AppText style={styles.name}>{item.title}</AppText>
                  <AppText numberOfLines={2} style={styles.gmail}>
                    {item.msg}
                  </AppText>
                </View>

                <MaterialCommunityIcons
                  name="greater-than"
                  size={20}
                  color="grey"
                />
              </View>
            </View>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: color.lightGrey,
              margin: 5,
            }}
          ></View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-between",
  },
  img: { height: 70, width: 70, borderRadius: 50 },
  text: { marginVertical: 5, marginLeft: 10 },
  name: { fontWeight: "bold" },
  gmail: { marginVertical: 2, color: "grey" },
});

export default ProfileMessages;
