import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../utils/todos/todosSlice";
import jobsReducer from "../utils/jobsSlice";
import darkModeReducer from "../utils/darkModeSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    jobs: jobsReducer,
    darkMode: darkModeReducer,
  },
});
