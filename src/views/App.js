import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "../components/MyComponent";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p> HELLO 500 MILLION AE! </p>

        <MyComponent name="Toni" age="18" />
      </header>
    </div>
  );
}

export default App;
