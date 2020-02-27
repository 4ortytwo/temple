import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "album",
  initialState: {
    loading: false,
    loaded: false,
    albums: [],
    error: null
  },
  reducers: {
    fetchAlbumsRequest(state) {
      state.loading = true;
    },
    fetchAlbumsSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.albums = action.payload;
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
