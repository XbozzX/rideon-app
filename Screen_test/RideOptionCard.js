import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import "intl";
import { Platform } from "react-native";
import "intl/locale-data/jsonp/en";

const data = [
  {
    id: "BusID_400",
    title: "BUS-400",
    multiplier: 1,
  },
  {
    id: "BusID_500",
    title: "BUS-500",
    multiplier: 1,
  },
  {
    id: "BusID_600",
    title: "BUS-600",
    multiplier: 1,
  },
];

const SURGE_CHARGE_RATE = 1.2;

const RideOptionCard = () => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <View>
      <View>
          <Text style={tw`text-center pt-3 text-xl`}>
            Ride - {travelTimeInformation?.distance.text}
          </Text>
          <Text style={tw`text-center pt-3 text-xl`}>
            Travel Times - {travelTimeInformation?.duration.text}
          </Text>
          <Text style={tw`text-center pt-3 text-xl`}>
            {new Intl.NumberFormat("en-my", {
              style: "currency",
              currency: "MYR",
            }).format(
              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100
            )}
          </Text>
          <Text style={tw`text-center pt-3 text-xl`}>BusID_400</Text>
      </View>
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
