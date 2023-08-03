import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState: {
    todos: [
      { id: 19723849798, desc: "Do homework", status: false },
      { id: 28729372737, desc: "Exercise", status: false },
      { id: 31231231111, desc: "Practice English", status: false },
    ],
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload);
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    update: (state, action) => {
      let updatedId = action.payload.id;
      let elementsIndex = state.todos.findIndex(
        (element) => [element.id] == updatedId
      );
      let copyList = [...state.todos];

      copyList[elementsIndex] = action.payload;
      state.todos = copyList;
    },
  },
});

export const { add, remove, update } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;
