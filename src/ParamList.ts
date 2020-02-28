import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamList = {
  Gallery: undefined;
  Album: {
    albumId: string;
    albumTitle: string;
  };
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};

export type NavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>;
};
