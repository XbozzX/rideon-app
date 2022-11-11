import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import RideOptionCard from "../Screen_test/RideOptionCard";
import Map from "./Map";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const DestinationCard = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <View>
      <View style={tw`h-1/2`}>
        <SafeAreaView style={tw`mt-1`}>
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
              //dispatch(setOrigin, setDestination);
              //navigate("DestinationCard");
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

      <View style={tw`h-1/1`}>
        <RideOptionCard />
      </View>
    </View>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({});
