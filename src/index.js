import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./static/index.css";
import "./static/App.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
