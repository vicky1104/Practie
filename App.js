import React from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTheme from "./app/Screens/Navigation/NavigationTheme";
import AppNavigator from "./app/Screens/Navigation/AppNavigator";
import NetInfo from "@react-native-community/netinfo";
import AppText from "./app/AppText/AppText";
import color from "./app/config/color";
import { AuthContext } from "./app/Auth/auth";
import { getToken } from "./app/Auth/Store";
import NavigationAuth from "./app/Screens/Navigation/NavigationAuth";
import jwtDecode from "jwt-decode";
import { start } from "./app/Utility/Logger";

export default function App() {
  const [network, setNetwork] = React.useState(false);
  const [user, setUser] = React.useState();
  const net = NetInfo.useNetInfo().isInternetReachable;
  const type = NetInfo.useNetInfo().type !== "unknown";
  const CheckInternet = React.useCallback(() => {
    if (net && type) setNetwork(true);
    else setNetwork(false);
  }, [net]);

  // React.useEffect(() => {
  //   CheckInternet();
  // }, [CheckInternet]);

  const restoreUser = async () => {
    let token = await getToken();
    if (!token) return;
    let user = jwtDecode(token);
    return setUser(user);
  };

  React.useEffect(() => restoreUser, start(), []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* `````````````````````NAVIGATION  */}
      <NavigationContainer theme={MyTheme}>
        {/* <AppNavigator /> */}

        {/* `````````````````````NETWORK CONNECTION */}

        {network && (
          <View style={styles.offline}>
            <AppText style={{ color: color.white }}>
              No Internet Connection...!
            </AppText>
          </View>
        )}

        {user ? <AppNavigator /> : <NavigationAuth />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  offline: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
    height: 50,
  },
});
