import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Display from "../Display";
import ListingScreen from "../ListingScreen";
import MessageScreen from "../MessageScreen";
import Profile from "../Profile";
import Routes from "./Routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import ProfileNavigator from "./ProfileNavigator";
import DisplayNavigationButton from "./DisplayNavigationButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
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
export default AppNavigator;
