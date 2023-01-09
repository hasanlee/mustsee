import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
  extraReducers: {},
});

export const { toggleDarkMode } = settings.actions;
export default settings.reducer;
