import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MapScreen from "./screens/MapScreen";
import LoginScreen from "./screens/LoginScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeTestScreen";
import QrcodescannerScreen from "./screens/QrcodescannerScreen";
import BottomTab from "./componets/BottomTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="LoginScreen"
                component={QrcodescannerScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen // This is test HomeScreen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen // This is test HomeScreen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
