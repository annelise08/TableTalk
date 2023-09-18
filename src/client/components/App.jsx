import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";

// basic app routing, home route should be protected so user needs to be logged in to see it
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
