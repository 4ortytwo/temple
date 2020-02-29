import { PhotoType } from "./../../@types/Gallery";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncReducerState } from "../../redux/store";

export type AlbumsDataState = {
  albums: { [name: string]: PhotoType[] };
};

export type AlbumsState = AlbumsDataState & AsyncReducerState;

export const initialState: AlbumsState = {
  loading: false,
  loaded: false,
  albums: {},
  error: null
};

export type PhotoTypePayload = {
  album: PhotoType[];
};

const { actions, reducer } = createSlice({
  name: "album",
  initialState,
  reducers: {
    fetchAlbumsRequest(state) {
      state.loading = true;
    },
    fetchAlbumsSuccess(state, action: PayloadAction<PhotoTypePayload>) {
      state.loading = false;
      state.loaded = true;
      state.albums[action.payload.album[0].albumId] = action.payload.album;
    },
    fetchAlbumsFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure
} = actions;
export const albumsReducer = reducer;
