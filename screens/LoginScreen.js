import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../componets/KeyboardAvoidingWrapper";
import { firebase } from "../firebase";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLinkContent,
  TextLink,
} from "../componets/styles";
//import tw from "twrnc";

const { brand, darkLight } = Colors;

function LoginScreen({ navigation: { navigate } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo source={require("../assets/logo_rideon.png")} />
          <SubTitle> Sign In </SubTitle>
          <StyledFormArea>
            <MyTextInput
              label="Email Address"
              icon="mail"
              placeholder="ali@gmail.com"
              onChangeText={(email) => setEmail(email)}
              //onBlur={handleBlur("email")}
              //value={values.email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />

            <MyTextInput
              label="Password"
              icon="lock"
              placeholder=" * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={(password) => setPassword(password)}
              //onBlur={handleBlur("password")}
              //value={values.password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <StyledButton onPress={() => loginUser(email, password)}>
              <ButtonText> Login </ButtonText>
            </StyledButton>
            <ExtraView>
              <ExtraText> Dont have an account? </ExtraText>
              <TextLink
                onPress={() => {
                  navigate("SignupScreen");
                }}
              >
                <TextLinkContent>Sign Up</TextLinkContent>
              </TextLink>
            </ExtraView>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel> {label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginScreen;
