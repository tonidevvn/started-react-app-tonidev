import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./views/App";
import store from "./store/RootStore";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
