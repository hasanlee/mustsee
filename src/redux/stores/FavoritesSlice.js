import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
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
  },
  extraReducers: {},
});

export const { addToFavorites, removeFromFavorites } = favorites.actions;
export default favorites.reducer;
