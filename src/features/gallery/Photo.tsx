import React from "react";
import { Image, View } from "react-native";
import { NavProps } from "../../ParamList";
import { PhotoType } from "../../@types/Gallery";

interface PhotoProps extends NavProps<"Photo">, PhotoType {}

export const Photo: React.FC<PhotoProps> = ({
  route: {
    params: { url, title }
  }
}) => {
  console.log("PHOUYRL", url);
  console.log("PHOTO TITLE", title);

  return (
    <View>
      <Image
        source={{ uri: url }}
        style={{ justifyContent: "center", alignItems: "center", height: 600 }}
      />
    </View>
  );
};
