import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/pHD_Section/1.Intro";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
