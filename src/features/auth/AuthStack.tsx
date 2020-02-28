import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Login";
import { Register } from "./Register";
import { ParamList } from "../../ParamList";

interface AuthStackProps {}
const Stack = createStackNavigator<ParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
