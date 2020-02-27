import { authReducer } from "./../features/auth/authSlice";
import { albumsReducer } from "../features/albums/albumsSlice";
import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({ albums: albumsReducer, auth: authReducer })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AsyncReducerState = {
  loading: boolean;
  loaded: boolean;
  error: unknown; // TODO: define error type
};

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
