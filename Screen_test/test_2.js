import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

function test_2({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigate("Home")}>
        <Text>Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default test_2;
