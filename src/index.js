import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);
