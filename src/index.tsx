import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeRoutes from "./routes/HomeRoutes";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <HomeRoutes />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
