import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  favoriteList: [],
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
