import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState: {
    value: false,
  },
  reducers: {
    toogle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;

      if (!!state.value) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
      }
    },
    on: (state) => {
      state.value = true;
    },
    off: (state) => {
      state.value = false;
    },
  },
});

export const { toogle, on, off } = darkModeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDarkMode = (state) => state.darkMode.value;

export default darkModeSlice.reducer;
