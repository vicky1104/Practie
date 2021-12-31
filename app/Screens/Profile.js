import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText/AppText";
import profilePic from "../assets/bullet.jpg";
import color from "../config/color";
import { AuthContext } from "../Auth/auth";
import { removeToken } from "../Auth/Store";

function Profile({ navigation }) {
  const authContext = React.useContext(AuthContext);
  const data = [
    {
      id: 1,
      icon: (
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={20}
          color="white"
        />
      ),
      title: "My Listings",

      arrow: (
        <MaterialCommunityIcons name="greater-than" size={18} color="grey" />
      ),
      backgroundColor: color.primary,
      targetScreen: "Feed",
    },
    {
      id: 2,
      icon: <MaterialCommunityIcons name="email" size={20} color="white" />,
      title: "My Messages",
      arrow: (
        <MaterialCommunityIcons name="greater-than" size={18} color="grey" />
      ),
      backgroundColor: color.secondary,
      targetScreen: "ProfileMessages",
    },
  ];

  const handleLogout = () => {
    authContext.setUser(null);
    removeToken();
  };
  return (
    <SafeAreaView style={styles.notch}>
      {/* ```````````````````````PROFILE */}

      <View style={styles.container}>
        <Image style={styles.img} source={profilePic} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "82%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.text}>
            <AppText style={styles.name}>{authContext.user.name}</AppText>
            <AppText style={styles.gmail}>{authContext.user.email}</AppText>
          </View>

          <MaterialCommunityIcons name="greater-than" size={18} color="grey" />
        </View>
      </View>

      <View style={{ backgroundColor: color.creame, marginTop: 40 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={color.lightGrey}
              onPress={() => navigation.navigate(item.targetScreen)}
            >
              <View style={styles.group}>
                <View
                  style={[
                    styles.comonIcon,
                    { backgroundColor: item.backgroundColor },
                  ]}
                >
                  {item.icon}
                </View>

                <View style={styles.groupBox}>
                  <AppText style={styles.text}>{item.title}</AppText>
                  <View>{item.arrow}</View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>

      {/* ``````````````````````` LOG OUT */}

      <TouchableHighlight
        underlayColor={color.lightGrey}
        onPress={handleLogout}
        style={{ backgroundColor: color.creame, marginTop: 30 }}
      >
        <View style={styles.group}>
          <View style={[styles.comonIcon, styles.icon3]}>
            <MaterialCommunityIcons
              name="email"
              size={20}
              color={color.white}
            />
          </View>

          <View style={styles.groupBox}>
            <AppText style={styles.text}>Log Out</AppText>
            <MaterialCommunityIcons
              name="greater-than"
              size={18}
              color="grey"
            />
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notch: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: color.creame,
    padding: 10,
  },
  comonIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  icon3: {
    backgroundColor: color.logout,
  },
  group: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  groupBox: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: { height: 70, width: 70, borderRadius: 50 },
  text: { marginVertical: 5, marginLeft: 10 },
  name: { fontWeight: "bold" },
  gmail: { marginVertical: 2, color: "grey" },
});

export default Profile;
