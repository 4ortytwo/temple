import React from "react";
import { View, Text, Button } from "react-native";
import { NavProps } from "../../ParamList";

interface RegisterProps extends NavProps<"Register"> {}

export const Register: React.FC<RegisterProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Register</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
