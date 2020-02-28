import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { login, logout } from "../src/features/auth/authSlice";
import { AppTabs } from "./features/AppTabs";
import { AuthStack } from "./features/auth/AuthStack";

interface RoutesProps {}

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
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
