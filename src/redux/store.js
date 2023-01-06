import { configureStore } from "@reduxjs/toolkit";
import favorite from "./stores/FavoritesSlice";
import movie from "./stores/MoviesSlice";

const store = configureStore({
  reducer: {
    favorite,
    movie,
  },
});

export default store;
