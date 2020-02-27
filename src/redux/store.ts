import { albumsReducer } from "../features/albums/albumsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: albumsReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
