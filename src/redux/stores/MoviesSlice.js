import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToMovies: (state, action) => {
      state.movies = action.payload.map((item) => ({
        ...item,
        favorite: false,
      }));
    },
    toggleFavorite: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.imdbId === action.payload.imdbId) {
          return { ...movie, favorite: action.payload.favorite };
        }
        return movie;
      });
    },
  },
  extraReducers: {},
});

export const { addToMovies, toggleFavorite } = movies.actions;
export default movies.reducer;
