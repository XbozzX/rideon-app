import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
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

const { brand, darkLight } = Colors;

const SignUpScreen = ({ navigation: { navigate } }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle> RideOn </PageTitle>
        <TouchableOpacity
          onPress={() => {
            navigate("LoginScreen");
          }}
        >
          <SubTitle> Sign In </SubTitle>
        </TouchableOpacity>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPasswor: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                icon="person"
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              <MyTextInput
                icon="mail"
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                icon="lock"
                placeholder="Password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                icon="lock"
                placeholder="Confirm Password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <ExtraView>
                <ExtraText> Dont have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Sign Up</TextLinkContent>
                </TextLink>
              </ExtraView>

              <StyledButton onPress={handleSubmit}>
                <ButtonText> Join Us </ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

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

export default SignUpScreen;
