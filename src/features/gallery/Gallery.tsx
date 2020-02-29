import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGalleryRequest,
  fetchGallerySuccess,
  fetchGalleryFailure
} from "./gallerySlice";
import axios from "axios";
import { RootState } from "../../redux/store";
import { NavProps } from "../../ParamList";
import { Album } from "../../@types/Gallery";

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
    textAlign: "center",
    height: 100
  }
});

interface GalleryProps extends NavProps<"Gallery"> {}

const Gallery = ({ navigation }: GalleryProps) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.gallery.loading);
  const gallery =
    useSelector((state: RootState) => state.gallery.gallery) || [];
  const fetchGallery = async () => {
    dispatch(fetchGalleryRequest());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch(fetchGallerySuccess(data));
    } catch (e) {
      dispatch(fetchGalleryFailure(e.message));
    }
  };

  useEffect(() => {
    if (!gallery.length) {
      fetchGallery();
    }
  }, []);

  const openAlbum = ({ id, title }: Album) => {
    navigation.navigate("Album", { id, title });
  };

  return (
    <View style={styles.MainContainer}>
      {loading && <ActivityIndicator size="large" />}
      <FlatList
        data={gallery}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1
            }}
          >
            <TouchableOpacity
              onPress={() => openAlbum({ id: item.id, title: item.title })}
            >
              <Text style={styles.imageThumbnail}>album{item.id}</Text>
            </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default Gallery;
