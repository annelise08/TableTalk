import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./scss/styles.css";

const node = document.getElementById("root");
const root = createRoot(node);
root.render(<App />);
