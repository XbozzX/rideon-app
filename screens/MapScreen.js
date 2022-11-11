import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../componets/Map";
import NavigateCard from "../componets/NavigateCard";
import RideOptionCard from "../componets/RideOptionCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
