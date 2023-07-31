import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import NavBarComponent from "../components/NavBarComponent";
import { TodoList } from "../components/TodoList";
import Logo from "../components/Logo";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBarComponent />
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <h1>Hello Toni</h1>
              <MyComponent name="Toni" age="18" />
            </Route>
            <Route path="/todo-app">
              <TodoList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Logo />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
