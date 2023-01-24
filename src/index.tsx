import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeRoutes from "./routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./App/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
