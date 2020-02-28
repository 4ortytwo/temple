import React from "react";
import { Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavProps } from "../../ParamList";
import { login, logout } from "./authSlice";
import { Center } from "../Center";
import { RootState } from "../../redux/store";
interface LoginProps extends NavProps<"Login"> {}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Center>
      <Text>Login</Text>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="LOGIN" onPress={() => dispatch(login("Monk"))} />
      {user && <Button title="LOGOUT" onPress={() => dispatch(logout())} />}
    </Center>
  );
};
