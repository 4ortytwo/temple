import { albumReducer } from "./../features/gallery/albumSlice";
import { authReducer } from "./../features/auth/authSlice";
import { galleryReducer } from "../features/gallery/gallerySlice";
import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    gallery: galleryReducer,
    auth: authReducer,
    album: albumReducer
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AsyncReducerState = {
  loading: boolean;
  loaded: boolean;
  error: unknown; // TODO: define error type
};

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
