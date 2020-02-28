import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import { NavProps } from "../../ParamList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "@reduxjs/toolkit";
import {
  fetchAlbumRequest,
  fetchAlbumSuccess,
  fetchAlbumFailure
} from "./albumSlice";
import axios from "axios";
import { RootState } from "../../redux/store";
import { PhotoType } from "../../@types/Gallery";

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
  albumId: string;
}

const Album = ({
  route: {
    params: { albumId }
  },
  navigation
}: AlbumProps) => {
  const dispatch = useDispatch();
  console.log("alid", albumId);

  const fetchAlbum = async (): Promise<Action> => {
    dispatch(fetchAlbumRequest());
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
        // {
        //   params: {
        //     _limit: 10
        //   }
        // }
      );
      return dispatch(fetchAlbumSuccess(data));
    } catch (e) {
      // console.log("error");
      return dispatch(fetchAlbumFailure(e.message));
    }
  };
  useEffect(() => {
    fetchAlbum();
  }, []);

  const album = useSelector((state: RootState) => state.album.album);
  const openPhoto = (item: PhotoType) => {
    console.log("beforeNavphoto", item);
    navigation.navigate("Photo", item);
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text>HELLO WORLD I"M ALBUm{albumId}</Text>
      <FlatList
        data={album}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1
            }}
          >
            <TouchableOpacity onPress={() => openPhoto(item)}>
              {/* <Text style={styles.imageThumbnail}>Picture{item.id}</Text> */}
              <Image
                style={styles.imageThumbnail}
                source={{ uri: item.thumbnailUrl }}
              />
            </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

export default Album;
