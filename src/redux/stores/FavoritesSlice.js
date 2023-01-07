import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  favoriteList: {
    id: "d2514e41-9349-446e-9cee-a8fe25a1332c",
    title: "Example List",
    movies: ["tt0068646", "tt0098019"],
  },
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbId !== action.payload
      );
    },
    addFavoriteList: (state, action) => {
      state.favoriteLists = [action.payload, ...state.favoriteLists];
    },
  },
  extraReducers: {},
});

export const { addToFavorites, removeFromFavorites, addFavoriteList } =
  favorites.actions;
export default favorites.reducer;
