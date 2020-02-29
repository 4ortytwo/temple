import { PhotoType, Album } from "./@types/Gallery";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamList = {
  Gallery: undefined;
  Album: Album;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Photo: PhotoType;
};

export type NavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>;
};
