import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/pHD_Section/1.Intro";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
