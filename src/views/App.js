import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarComponent from "../components/NavBarComponent";
import Logo from "../components/Logo";
import { routes } from "../routes/MainRoutes";
import Page404 from "./404";
import ListUser from "./users";
import UserDetails from "./user-details";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBarComponent />
          </header>
          <div className="container">
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route key={index} exact path={route.path}>
                    {route.view}
                  </Route>
                );
              })}
              <Route path="/user/:id">
                <UserDetails />
              </Route>
              <Route path="/users?page=:page">
                <ListUser />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
            <Logo />
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
