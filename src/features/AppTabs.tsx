import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamList } from "../ParamList";
import Gallery from "./gallery/Gallery";
import Album from "./gallery/Album";
interface AppTabsProps {}

const Tabs = createBottomTabNavigator<ParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Gallery" component={Gallery} />
      <Tabs.Screen name="Album" component={Album} />
    </Tabs.Navigator>
  );
};
