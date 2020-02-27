import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ParamList } from "./ParamList";
import Gallery from "./features/gallery/Gallery";
import Album from "./features/gallery/Album";
import { Login } from "./features/auth/Login";
import { Register } from "./features/auth/Register";
import { AsyncStorage, Text, ActivityIndicator, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { Center } from "./features/Center";
import { login, logout } from "../src/features/auth/authSlice";

interface RoutesProps {}

const Stack = createStackNavigator<ParamList>();
export const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          dispatch(login(userString));
          setLoading(false);
        } else {
          setLoading(false);
        }
        console.log("userString", userString);
      })
      .catch(e => {
        console.warn("error", e);
      });
  }, []);

  // if (loading) {
  //   return (
  //     <Center>
  //       <ActivityIndicator size="large" />
  //     </Center>
  //   );
  // }

  return (
    <NavigationContainer>
      {user ? (
        <Center>
          <Text>YOU ARE REAL</Text>
          <Button title="LOGOUT" onPress={() => dispatch(logout())} />
        </Center>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          // screenOptions={{
          //   header: () => null
          // }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Album" component={Album} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
