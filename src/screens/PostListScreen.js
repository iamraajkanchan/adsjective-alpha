import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const PostListScreen = ({ navigation }) => {
  return (
    <>
      <Text>This is Post List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("PostDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default PostListScreen;
