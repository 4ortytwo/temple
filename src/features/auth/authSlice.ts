import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "user",
  initialState: {
    loading: false,
    loaded: false,
    user: null,
    error: null
  },
  reducers: {
    setUserRequest(state) {
      state.loading = true;
    },
    setUserSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.user = action.payload;
    },
    setUserFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    }
  }
});

export const { setUserRequest, setUserSuccess, setUserFailure } = actions;
export const userReducer = reducer;
