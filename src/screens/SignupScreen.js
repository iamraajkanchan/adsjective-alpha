import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text>This is Sign Up Screen</Text>
      <Button
        title="Go to SignIn Screen"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
