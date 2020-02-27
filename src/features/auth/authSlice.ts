import { AsyncStorage } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import store, { AsyncReducerState, AppThunk } from "../../redux/store";
export type User = null | { userId: string };

interface UserInitialState extends AsyncReducerState {
  user: User;
}

const initialState: UserInitialState = {
  loading: false,
  loaded: false,
  user: null,
  error: null
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
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
export const authReducer = reducer;

export const login = (userId: string): AppThunk => async dispatch => {
  dispatch(setUserRequest());
  const user = { userId };
  AsyncStorage.setItem("user", JSON.stringify(user));
  dispatch(setUserSuccess(userId));
};

export const logout = (): AppThunk => async dispatch => {
  dispatch(setUserRequest());
  AsyncStorage.removeItem("user");
  dispatch(setUserSuccess(null));
};
