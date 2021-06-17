import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "assets/styles/globals";
import App from "components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
