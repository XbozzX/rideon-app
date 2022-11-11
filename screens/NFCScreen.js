import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import WalletRechargeStyles from "../componets/WalletRechargeStyles";


const NFCScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={Styles.container}>
          <Image
            style={{ width: "100%", height: "80%" }}
            source={require("../assets/behavioral-contactless-2.gif")}
          />
          <Text style={WalletRechargeStyles.descText}>
            Please place you NFC to the near NFC reader
          </Text>
        </View>
        <TouchableOpacity
          style={WalletRechargeStyles.payBoxView}
          onPress={() => navigate("QrcodescannerScreen")}
        >
          <Text style={WalletRechargeStyles.rechargeText}> Okay </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 25,
  },
});

export default NFCScreen;
