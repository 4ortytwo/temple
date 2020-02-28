import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import {
  fetchGalleryRequest,
  fetchGallerySuccess,
  fetchGalleryFailure
} from "./gallerySlice";
import axios from "axios";
import { RootState } from "../../redux/store";
import { NavProps } from "../../ParamList";

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

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const Gallery = ({ navigation, route }: GalleryProps) => {
  const dispatch = useDispatch();
  const fetchGallery = async (): Promise<Action> => {
    // const fetchGallery = () => async (
    //  dispatch: Dispatch<PayloadAction>
    //): Promise<Action> => {
    dispatch(fetchGalleryRequest());
    // console.log('we"re loaing');
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
        // {
        //   params: {
        //     _limit: 10
        //   }
        // }
      );
      return dispatch(fetchGallerySuccess(data));
    } catch (e) {
      // console.log("error");
      return dispatch(fetchGalleryFailure(e.message));
    }
  };

  const loading = useSelector((state: RootState) => state.loading);
  useEffect(() => {
    fetchGallery();
  }, []);

  // * post this in ReadMe -> using it this way to target the variable directly without destructuring as advised by Redux team to prevent unnecessary re-renders
  const gallery = useSelector((state: RootState) => state.gallery.gallery);

  const openAlbum = ({ albumId, albumTitle }) => {
    console.log("id", albumId);
    console.log("title", albumTitle);

    navigation.navigate("Album", { albumId, albumTitle });
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
              onPress={() =>
                openAlbum({ albumId: item.id, albumTitle: item.title })
              }
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
