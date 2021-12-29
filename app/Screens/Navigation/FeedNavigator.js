import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListDetails from "../../Components/ListDetails";
import ListingScreen from "../ListingScreen";
import { TransitionSpecs } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      name="ListScreen"
      component={ListingScreen}
      options={{
        headerShown: false,
        transitionSpec: {
          open: TransitionSpecs.RevealFromBottomAndroidSpec,
          close: TransitionSpecs.RevealFromBottomAndroidSpec,
        },
      }}
    />

    <Stack.Screen
      name="ListDetails"
      component={ListDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
