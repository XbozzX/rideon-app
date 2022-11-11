import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import WalletRechargeStyles from "../componets/WalletRechargeStyles";

const SucessPaymentScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={Styles.container}>
          <TouchableOpacity
            //style={WalletRechargeStyles.payBoxView}
            onPress={() => navigate("QrcodescannerScreen")}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/spinner-2x.gif")}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    //margin: 25,
  },
});

export default SucessPaymentScreen;
