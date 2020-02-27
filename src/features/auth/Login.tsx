import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { NavProps } from "../../ParamList";
import { login, logout } from "./authSlice";
import { Center } from "../Center";
interface LoginProps extends NavProps<"Login"> {}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Center>
      <Text>Login</Text>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="LOGIN" onPress={() => dispatch(login("USERNAME"))} />
    </Center>
  );
};
