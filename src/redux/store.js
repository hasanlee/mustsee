import { configureStore } from "@reduxjs/toolkit";
import favorite from "./stores/FavoritesSlice";
import movie from "./stores/MoviesSlice";
import setting from "./stores/SettingSlice";

const store = configureStore({
  reducer: {
    favorite,
    movie,
    setting,
  },
});

export default store;
