import { albumsReducer } from "./../features/gallery/albumsSlice";
import { authReducer } from "./../features/auth/authSlice";
import { galleryReducer } from "../features/gallery/gallerySlice";
import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    gallery: galleryReducer,
    auth: authReducer,
    albums: albumsReducer
  }),
  devTools: true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AsyncReducerState = {
  loading: boolean;
  loaded: boolean;
  error: unknown; // TODO: define error type
};

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
