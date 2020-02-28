import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList
} from "react-native";
import { NavProps } from "../../ParamList";
import React, { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 30
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  }
});

interface AlbumProps extends NavProps<"Album"> {
  album: object;
}

const Album = ({ album }: AlbumProps) => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text>HELLO WORLD I"M ALBUm</Text>
    </SafeAreaView>
  );
};

export default Album;
