import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../Profile";
import ProfileMessages from "../../Components/ProfileMessages";

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ProfileMessages" component={ProfileMessages} />
  </Stack.Navigator>
);
export default ProfileNavigator;
