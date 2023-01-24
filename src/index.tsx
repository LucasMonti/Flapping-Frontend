import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeRoutes from "./routes/HomeRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./App/store";
import { AuthProvider } from "./provider/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthProvider>
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
    </AuthProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
