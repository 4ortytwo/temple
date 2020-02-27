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
      {loading && <ActivityIndicator size="large" />}
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Album;
