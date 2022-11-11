import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Icon } from "@rneui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import ScanStyles from "../componets/ScanStyles";
import { useNavigation } from "@react-navigation/native";

import WalletRecharge from "./WalletRecharge";
import TransactionEwallet from "./TransactionEwallet";
import NFCScreen from "./NFCScreen";

export default function App({ navigation: { navigate } }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <SafeAreaProvider>
        <View style={ScanStyles.scrollViewStyle}>
          <View style={ScanStyles.header}>
            <TouchableOpacity
              onPress={() => navigate("TransactionEwalletScreen")}
            >
              <Icon
                //style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="history"
                color="purple"
                type="MaterialCommunityIcons"
                size={42}
                //  alignSelf="flex-start"
              />
            </TouchableOpacity>
          </View>
          <Text style={ScanStyles.textTitle1}>RM 5.00</Text>
          <Text style={ScanStyles.textTitle}>Scan QR Code</Text>
          <Text numberOfLines={8} style={ScanStyles.descText}>
            Place qr code inside the frame to scan please avoid shake to get
            results quickly
          </Text>
          <View style={ScanStyles.scanCardView}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={ScanStyles.scanCardView}
            />
          </View>
          <Text style={styles.maintext}> Scanning Code... </Text>
          <View style={styles.header_to_right}>
            <TouchableOpacity
              //For NFC Screen
              onPress={() => navigate("NFCScreen")}
            >
              <Icon
                //style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="minussquareo"
                color="aqua"
                type="antdesign"
                size={42}
              />
            </TouchableOpacity>
            <TouchableOpacity
              //For WalletRecharge
              onPress={() => navigate("WalletRechargeScreen")}
            >
              <Icon
                //style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="pluscircle"
                color="purple"
                type="antdesign"
                size={42}
              />
            </TouchableOpacity>
          </View>

          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
              color="tomato"
            />
          )}
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },
  maintext: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    margin: 5,
    color: "#B9B9B9",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 400,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  header_to_right: {
    // alignSelf: "flex-end",
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginRight: 120,
    marginLeft: 120,
  },
  header_to_left: {
    //alignSelf: 'flex-end',
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
