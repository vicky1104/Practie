import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Display from "../Display";
import Routes from "./Routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import ProfileNavigator from "./ProfileNavigator";
import DisplayNavigationButton from "./DisplayNavigationButton";
import * as Notifications from "expo-notifications";
import { register } from "../../Api/expoPushToken";
import { log } from "../../Utility/Logger";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const NotificationPermission = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      register(token);
    } catch (error) {
      log(error);
    }
  };

  React.useEffect(() => NotificationPermission(), []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Display"
        component={Display}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <DisplayNavigationButton
              onPress={() => navigation.navigate(Routes.DISPLAY)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
