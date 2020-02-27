import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "gallery",
  initialState: {
    loading: false,
    loaded: false,
    gallery: [],
    error: null
  },
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
