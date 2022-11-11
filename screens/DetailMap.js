import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
//import tw from "tailwind-react-native-classnames";
import tw from "twrnc";
//import NavOptions from "../componets/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { createIconSetFromFontello } from "react-native-vector-icons";
import MapView from "react-native-maps";
import Map from "../componets/Map";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "@rneui/themed";
import BottomTab from "../componets/BottomTab";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DestinationCard from "../componets/DestinationCard";
import MapMarker from "../componets/MapMarker";
import { StatusBar } from "expo-status-bar";

//import RideOptionCard from "./RideOptionCard";

const HomeScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  const Stack = createNativeStackNavigator();

  return (
    <View style={tw`flex-1`}>
      <StatusBar style="dark" />
      <SafeAreaView style={tw`mt-1`}>
        <GooglePlacesAutocomplete
          placeholder="Where are you from?"
          styles={{
            container: {
              flex: 0,
              paddingTop: 45,
              padding: 10,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            navigate("DestinationCard");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
            //components: "country:us",  .co.malaysia
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </SafeAreaView>
      <MapMarker />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
