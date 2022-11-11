import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import { store } from "./store";

import { Provider } from "react-redux";
import BottomTab from "./componets/BottomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WalletRecharge from "./screens/WalletRecharge";
import TransactionEwallet from "./screens/TransactionEwallet";
import NFCScreen from "./screens/NFCScreen";
import SuccesPaymentScreen from "./screens/SuccesPaymentScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle User state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={BottomTab} />
        <Stack.Screen
          name="TransactionEwalletScreen"
          component={TransactionEwallet}
        />
        <Stack.Screen name="WalletRechargeScreen" component={WalletRecharge} />
        <Stack.Screen name="NFCScreen" component={NFCScreen} />
        <Stack.Screen
          name="SuccesPaymentScreen"
          component={SuccesPaymentScreen}
        />
      </Stack.Navigator>
    </Provider>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
