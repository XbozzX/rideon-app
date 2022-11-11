import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DestinationCard from "../componets/DestinationCard";
import DetailMap from "../screens/DetailMap";

const HomeScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={tw`flex-1`}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeCard"
          component={DetailMap}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DestinationCard"
          component={DestinationCard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
