import MyComponent from "../components/MyComponent";
import About from "../views/about";
import { TodoList } from "../views/todo";
import ListUser from "../views/users";

export const routes = [
  {
    path: "/",
    title: "Home",
    view: (
      <>
        <h1>Hello Toni</h1>
        <MyComponent name="Toni" age="18" />{" "}
      </>
    ),
  },
  { path: "/todo-app", title: "Todo App", view: <TodoList /> },
  { path: "/users", title: "Users", view: <ListUser /> },
  { path: "/about", title: "About", view: <About /> },
];
