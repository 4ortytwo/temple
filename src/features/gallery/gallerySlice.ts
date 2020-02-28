import { createSlice } from "@reduxjs/toolkit";
import { Album } from "../../@types/Gallery";
import { AsyncReducerState } from "../../redux/store";

export type GalleryDataState = {
  gallery: Album[];
};

export type GalleryState = GalleryDataState & AsyncReducerState;

export const initialState = {
  loading: false,
  loaded: false,
  gallery: [],
  error: null
};

const { actions, reducer } = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    fetchGalleryRequest(state) {
      state.loading = true;
    },
    fetchGallerySuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.gallery = action.payload;
    },
    fetchGalleryFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchGalleryRequest,
  fetchGallerySuccess,
  fetchGalleryFailure
} = actions;
export const galleryReducer = reducer;
