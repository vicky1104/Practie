import React from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "../WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterForm from "../../Components/Form/RegisterForm";
import LoginForm from "../../Components/Form/LoginForm";

const Stack = createStackNavigator();
function NavigationAuth(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Register" component={RegisterForm} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NavigationAuth;
