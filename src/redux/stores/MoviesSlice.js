import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {},
});

export const { addToMovies } = movies.actions;
export default movies.reducer;
