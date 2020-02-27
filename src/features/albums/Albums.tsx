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
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure
} from "./albumsSlice";
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
    height: 100
  }
});

interface AlbumsProps extends NavProps<"Albums"> {}

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const Albums = ({ navigation, route }: AlbumsProps) => {
  const dispatch = useDispatch();
  const fetchAlbums = async (): Promise<Action> => {
    // const fetchAlbums = () => async (
    //  dispatch: Dispatch<PayloadAction>
    //): Promise<Action> => {
    dispatch(fetchAlbumsRequest());
    console.log('we"re loaing');
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/",
        {
          params: { _limit: 10 }
        }
      );
      console.log("ALBUMS RECEIVED", data);
      return dispatch(fetchAlbumsSuccess(data));
    } catch (e) {
      console.log("error");
      return dispatch(fetchAlbumsFailure(e.message));
    }
  };

  const albums = useSelector((state: RootState) => state.albums);
  const loading = useSelector((state: RootState) => state.loading);
  useEffect(() => {
    fetchAlbums();
  }, []);

  const openAlbum = id => {
    navigation.navigate("Album");
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      {loading && <ActivityIndicator size="large" />}
      <Text>Albums will be here</Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
            <TouchableOpacity onPress={() => openAlbum(item.id)}>
              <Text style={styles.imageThumbnail}>album{item.id}</Text>
            </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Albums;
