import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamList } from "../ParamList";
import Gallery from "./gallery/Gallery";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "./profile/Profile";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<ParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Gallery") {
            iconName = "md-albums";
          } else if (route.name === "Profile") {
            iconName = "md-person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Gallery" component={Gallery} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
