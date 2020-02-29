import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { NavProps } from "../../ParamList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const album =
    useSelector((state: RootState) => state.albums.albums[id]) || [];

  const fetchAlbum = async () => {
    dispatch(fetchAlbumsRequest());
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
      );
      dispatch(fetchAlbumsSuccess({ album: data }));
    } catch (e) {
      dispatch(fetchAlbumsFailure(e.message));
    }
  };
  useEffect(() => {
    if (!album.length) {
      fetchAlbum();
    }
  }, []);

  const openPhoto = (item: PhotoType) => {
    navigation.navigate("Photo", item);
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      {album.length !== 0 && (
        <FlatList
          data={album}
          renderItem={({ item }: { item: PhotoType }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1
              }}
            >
              <TouchableOpacity onPress={() => openPhoto(item)}>
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
