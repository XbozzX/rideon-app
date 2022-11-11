import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeTestScreen";
import QrcodescannerScreen from "../screens/QrcodescannerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Icon } from "@rneui/themed";

const BottomTab = ({ navigation: { navigate } }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color="black" type="entypo" />
          ),
        }}
      />
      <Tab.Screen
        name="QrcodescannerScreen"
        component={QrcodescannerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="scan1" color="black" type="antdesign" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color="black" type="feather" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
