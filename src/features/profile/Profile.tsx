import React from "react";
import { Center } from "../Center";
import { Text, Button } from "react-native";
import { NavProps } from "../../ParamList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../auth/authSlice";

interface ProfileProps extends NavProps<"Profile"> {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user in profile", user);
  return (
    <Center>
      <Text>Your profile, Dear {user.userId}</Text>
      <Button title="LOGOUT" onPress={() => dispatch(logout())} />
    </Center>
  );
};
