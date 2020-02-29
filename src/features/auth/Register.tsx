import React from "react";
import { Text, Button } from "react-native";
import { NavProps } from "../../ParamList";
import { Center } from "../Center";
interface RegisterProps extends NavProps<"Register"> {}

export const Register: React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
};
