import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WalletRechargeStyles from "../componets/WalletRechargeStyles";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import SuccesPaymentScreen from "./SuccesPaymentScreen";
import QrcodescannerScreen from "./QrcodescannerScreen";
import { useNavigation } from "@react-navigation/native";
import { Line } from "../componets/styles";

const WalletRecharge = ({ navigation: { navigate } }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <SafeAreaProvider>
        <View style={WalletRechargeStyles.scrollViewStyle}>
          <View style={WalletRechargeStyles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate("QrcodescannerScreen")}
            >
              <Icon
                //style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="doubleleft"
                color="black"
                type="antdesign"
                size={42}
                alignSelf="flex-start"
              />
            </TouchableOpacity>
            <Text style={WalletRechargeStyles.textTitle_recharge}>
              Recharge
            </Text>
          </View>
          <View style={WalletRechargeStyles.boxSpacing}>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 10 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 20 </Text>
            </TouchableOpacity>
          </View>
          <View style={WalletRechargeStyles.boxSpacing}>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 50 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 100 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={WalletRechargeStyles.rechargeBoxView}>
              <Text style={WalletRechargeStyles.rechargeText}> 500 </Text>
            </TouchableOpacity>
          </View>

          <Text style={WalletRechargeStyles.highlight_totalPrice}>RM 0.00</Text>
          <Text style={WalletRechargeStyles.textTitle1}>Payment</Text>
          <Line />
          <Text style={WalletRechargeStyles.descText}>
            Online Banking (FPX) - Maybank2u
          </Text>
          <Line />
          <Text style={WalletRechargeStyles.textTitle_topUp}>Top up</Text>
          <View style={WalletRechargeStyles.header_columTopUp}>
            <Text style={WalletRechargeStyles.descText_totalPayment}>
              Total Payment
            </Text>
            <Text style={WalletRechargeStyles.descText1}>RM 0.00</Text>
          </View>
          <Line />
          <TouchableOpacity
            style={WalletRechargeStyles.payBoxView}
            onPress={() => navigation.navigate("SuccesPaymentScreen")}
          >
            <Text style={WalletRechargeStyles.rechargeText}> Okay </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default WalletRecharge;

const styles = StyleSheet.create({});
