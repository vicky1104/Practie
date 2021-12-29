import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import AppButton from "../Components/AppButton";
import color from "../config/color";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logo}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.logoTxt}>Sale what you Dont need...!!</Text>
        </View>

        <View style={styles.loginBtn}>
          <AppButton
            style={{ color: color.primary }}
            onPress={() => navigation.navigate("Login")}
            title="LOG IN"
          />
        </View>

        <View style={styles.registerBtn}>
          <AppButton
            style={{ backgroundColor: color.secondary }}
            onPress={() => navigation.navigate("Register")}
            title="REGISTER"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    height: 100,
    top: 70,
    alignItems: "center",
  },
  loginBtn: {
    marginBottom: 10,
    width: "90%",
    borderRadius: 30,
  },
  registerBtn: {
    marginBottom: 10,
    width: "90%",
    borderRadius: 30,
  },
  logoTxt: {
    marginTop: 5,
    fontSize: 22,
    color: color.black,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
