import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import tw from "twrnc";

const MapMarker = () => {
  return (
    <MapView
      style={tw`flex-1`}
      //mapType="mutedStandard"
      initialRegion={{
        latitude: 4.382971299999999,
        longitude: 100.9750977,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 4.382971299999999, longitude: 100.9750977 }}
        //title="village 6323 "
        //description="400-Taman Cheras Utama 5 minute  500-Kajang 5minute"
      >
        <Callout>
          <View>
            <View style={styles.bubble}>
              <Text></Text>
              <Text style={styles.name}> Village 6 to Village 5 </Text>
              <Text> Bus-400 || 9-minute</Text>
              <Text> Bus-500 || 13-minute</Text>
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>

      <Marker
        coordinate={{ latitude: 4.3861051, longitude: 100.9638138 }}
        title="village 5"
        description="cafe"
      >
        <Callout>
          <View>
            <View style={styles.bubble}>
              <Text></Text>
              <Text style={styles.name}> Village 5 to Village 6 </Text>
              <Text> Bus-300 || 7-minute</Text>
              <Text> Bus-600 || 15-minute</Text>
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default MapMarker;

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#ccc",
    borderWidth: 0.5,
    //padding: 5,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
});
