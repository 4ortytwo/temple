import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamList } from "../ParamList";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "./profile/Profile";
import { GalleryStack } from "./gallery/GalleryStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<ParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // let iconName;

          // if (route.name === "Gallery") {
          //   iconName = "md-albums";
          // } else if (route.name === "Profile") {
          //   iconName = "md-person";
          // }
          const getIcon = (routeName: string) => {
            switch (routeName) {
              case "Gallery":
                return "md-albums";
              case "Profile":
                return "md-person";
              default:
                throw new Error("no icon");
            }
          };

          // You can return any component that you like here!
          return (
            <Ionicons name={getIcon(route.name)} size={size} color={color} />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Gallery" component={GalleryStack} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
