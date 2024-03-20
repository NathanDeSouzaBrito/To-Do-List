import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/section/Header";
import Tasks from "./Components/section/Tasks";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Tasks />
  </React.StrictMode>
);
