import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "album",
  initialState: {
    loading: false,
    loaded: false,
    album: [],
    error: null
  },
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
