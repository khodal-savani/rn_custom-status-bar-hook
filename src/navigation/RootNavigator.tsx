import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOne from "../screens/TabOne";
import TabTwo from "../screens/TabTwo";
import TabThree from "../screens/TabThree";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="TabOne" component={TabOne} />
        <Tab.Screen name="TabTwo" component={TabTwo} />
        <Tab.Screen name="TabThree" component={TabThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;