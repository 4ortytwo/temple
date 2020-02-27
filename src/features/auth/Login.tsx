import React from "react";
import { View, Text, Button } from "react-native";
import { NavProps } from "../../ParamList";
import { login, logout } from "./authSlice";

interface LoginProps extends NavProps<"Login"> {}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};
