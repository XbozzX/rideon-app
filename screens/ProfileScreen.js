import React from "react";
//import Images from '../config/Images';
import {
  Button,
  Container,
  ScreenContainer,
  Touchable,
  withTheme,
} from "@draftbit/ui";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
//import auth from "@react-native-firebase/auth"; there have bug
import { firebase } from "../firebase";

const REPLACE_SCREEN_NAME = (props) => {
  const { theme } = props;
  const navigation = useNavigation();

  SignOut = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  return (
    <ScreenContainer
      style={styles.screenContainerJb}
      scrollable={true}
      hasSafeArea={false}
    >
      <ImageBackground
        style={styles.imageBackgroundNb}
        source={require("../assets/card_visa_bg.png")}
        resizeMode="cover"
      />
      <Container
        style={styles.containerEA}
        elevation={0}
        useThemeGutterPadding={true}
      >
        <Image
          style={StyleSheet.flatten([
            styles.imageA3,
            { borderRadius: theme.borderRadius.global },
          ])}
          resizeMode="cover"
          source={require("../assets/favicon.png")}
        />
        <Text
          style={StyleSheet.flatten([
            styles.textPr,
            theme.typography.headline3,
          ])}
        >
          Irfan Rizal
        </Text>
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOk,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewKs}>
            <Text style={theme.typography.body1}>My Account</Text>
            <Icon
              style={styles.iconFE}
              size={24}
              name="account-box"
              type="MaterialCommunityIcons"
              color={theme.colors.strong}
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOm,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewYR}>
            <Text style={theme.typography.body1}>Notifications</Text>
            <Icon
              style={styles.iconCl}
              name="notifications"
              type="Ionicons"
              color={theme.colors.strong}
              size={24}
            />
          </View>
        </Touchable>
        <Touchable
          onPress={() => SignOut()}
          style={StyleSheet.flatten([
            styles.touchableJg,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewAl}>
            <Text style={theme.typography.body1}>Log out</Text>
            <Icon
              style={styles.iconZb}
              size={24}
              name="logout"
              type="antdesign"
              color={theme.colors.strong}
            />
          </View>
        </Touchable>
      </Container>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  screenContainerJb: {
    justifyContent: "space-evenly",
  },
  viewKs: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  viewYR: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  viewS1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewAl: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageBackgroundNb: {
    width: "100%",
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: "center",
    marginTop: -65,
  },
  textPr: {
    width: "100%",
    textAlign: "center",
    marginTop: 16,
  },
  touchableOk: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 24,
    height: 24,
  },
  iconZz: {
    width: 24,
    height: 24,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: "center",
    width: "50%",
  },
  touchableOm: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
});
export default withTheme(REPLACE_SCREEN_NAME);
