import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [
    {
      imdbID: "tt3896198",
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
  ],
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
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
  extraReducers: {},
});

export const { addToFavorites, removeFromFavorites } = favorites.actions;
export default favorites.reducer;
