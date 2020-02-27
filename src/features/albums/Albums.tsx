import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
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
const Albums = () => {
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
  return (
    <View>
      {loading && <ActivityIndicator size="large" />}
      <Text>ALBUMS HERE</Text>
    </View>
  );
};

export default Albums;
