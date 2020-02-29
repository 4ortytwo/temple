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
import {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure
} from "./albumsSlice";

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

interface AlbumProps extends NavProps<"Album"> {}

const Album = ({
  route: {
    params: { id }
  },
  navigation
}: AlbumProps) => {
  const dispatch = useDispatch();
  console.log("alid", id);
  const album =
    useSelector((state: RootState) => state.albums.albums[id]) || [];

  const fetchAlbum = async () => {
    dispatch(fetchAlbumsRequest());
    try {
      console.log("try in fetchAlbums");
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
        // {
        //   params: {
        //     _limit: 10
        //   }
        // }
      );
      dispatch(fetchAlbumsSuccess({ album: data }));
    } catch (e) {
      // console.log("error");
      dispatch(fetchAlbumsFailure(e.message));
      console.log("error here");
    }
  };
  useEffect(() => {
    if (!album.length) {
      fetchAlbum();
    }
  }, []);

  const openPhoto = (item: PhotoType) => {
    console.log("beforeNavphoto", item);
    navigation.navigate("Photo", item);
  };
  console.log("album before", album);
  return (
    <SafeAreaView style={styles.MainContainer}>
      {album.length !== 0 && (
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
      )}
    </SafeAreaView>
  );
};

export default Album;
