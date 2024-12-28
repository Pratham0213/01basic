import React from "react";
import ReactDOM from "react-dom/client";
// import App, { pratham } from "./App";
import App, { Pratham } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Pratham />
    <App />
  </React.StrictMode>
);
