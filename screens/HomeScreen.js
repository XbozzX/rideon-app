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

import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView style={tw`mt-10`}>
        <GooglePlacesAutocomplete
          placeholder="Where are you from?"
          styles={{
            container: {
              flex: 0,
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

            //dispatch(setDestination(null));
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

        <GooglePlacesAutocomplete
          placeholder="Where to"
          styles={{
            container: {
              flex: 0,
              padding: 10,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            console.log(details);
            console.log(data);
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            //navigation.navigate(RideOptionCard);
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </SafeAreaView>
      <Map />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
