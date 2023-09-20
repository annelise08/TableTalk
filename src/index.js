import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AuthProvider from "./client/state-management/AuthProvider";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./client/scss/global-styles.scss";

import App from "./client/components/App";

const node = document.getElementById("root");
const root = createRoot(node);
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
