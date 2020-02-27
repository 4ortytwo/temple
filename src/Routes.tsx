import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ParamList } from "./ParamList";
import Albums from "./features/albums/Albums";
import Album from "./features/albums/Album";
import { Login } from "./features/auth/Login";
import { Register } from "./features/auth/Register";
interface RoutesProps {}

const Stack = createStackNavigator<ParamList>();
export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
