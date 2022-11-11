import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../componets/Card";
import ListService from "../componets/ListService";
import RecentTransaction from "../componets/RecentTransaction";

const EwalletScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Hello</Text>
            <Text style={styles.userName}>My Name</Text>
          </View>
          <Image source={require("../assets/ic_notif.png")} />
        </View>
        <View style={styles.card}>
          <Card />
        </View>
        <ListService />
        <RecentTransaction />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EwalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    paddingVertical: 14,
  },
});
