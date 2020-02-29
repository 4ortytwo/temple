import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ParamList, NavProps } from "../../ParamList";
import Gallery from "./Gallery";
import { TouchableOpacity, Text } from "react-native";
import Album from "./Album";
import { Photo } from "./Photo";

interface GalleryStackProps {}
// interface GalleryStackProps extends NavProps<"Gallery"> {}

const Stack = createStackNavigator<ParamList>();

export const GalleryStack: React.FC<GalleryStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>BUTTON</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Album #${route.params.id}`
        })}
        name="Album"
        component={Album}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Photo #${route.params.id}`
        })}
        name="Photo"
        component={Photo}
      />
    </Stack.Navigator>
  );
};
