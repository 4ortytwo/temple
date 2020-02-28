import { Album } from "./../../@types/Gallery";
import { createSlice } from "@reduxjs/toolkit";
import { AsyncReducerState } from "../../redux/store";

export type AlbumDataState = {
  album: Album;
};

export type AlbumState = AlbumDataState & AsyncReducerState;

export const initialState = {
  loading: false,
  loaded: false,
  album: {},
  error: null
};

const { actions, reducer } = createSlice({
  name: "album",
  initialState,
  reducers: {
    fetchAlbumRequest(state) {
      state.loading = true;
    },
    fetchAlbumSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.album = action.payload;
    },
    fetchAlbumFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchAlbumRequest,
  fetchAlbumSuccess,
  fetchAlbumFailure
} = actions;
export const albumReducer = reducer;
