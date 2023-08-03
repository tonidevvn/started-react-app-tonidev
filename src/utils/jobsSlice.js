import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState: {
    jobs: [
      { id: 19723849798, jobTitle: "SW", jobSalary: 400 },
      { id: 19723849799, jobTitle: "IT", jobSalary: 500 },
      { id: 19723849800, jobTitle: "Manager", jobSalary: 1000 },
    ],
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.jobs.push(action.payload);
    },
    remove: (state, action) => {
      state.jobs = state.jobs.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = jobsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectJobs = (state) => state.jobs.jobs;

export default jobsSlice.reducer;
