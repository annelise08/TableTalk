import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./client/scss/styles.css";

import App from "./client/components/App";

const node = document.getElementById("root");
const root = createRoot(node);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
