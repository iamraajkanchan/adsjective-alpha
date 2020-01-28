import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import ChatScreen from "./src/screens/ChatScreen";
import PostCreateScreen from "./src/screens/PostCreateScreen";
import PostDetailScreen from "./src/screens/PostDetailScreen";
import PostListScreen from "./src/screens/PostListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    postListFlow: createStackNavigator({
      PostList: PostListScreen,
      PostDetail: PostDetailScreen,
      Chat: ChatScreen
    }),
    PostCreate: PostCreateScreen,
    AccountScreen: AccountScreen
  })
});

export default createAppContainer(switchNavigator);
