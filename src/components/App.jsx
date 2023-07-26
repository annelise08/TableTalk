import React, { Component } from "react";
import Reccomendations from "./Reccomendations";
import NavBar from "./NavBar";

function App() {
  // app should render reccomendations page
  return (
    <div>
      <NavBar />
      <h2 className="my-reccs">My restaurant reccomendations</h2>
      <Reccomendations />
    </div>
  );
}

export default App;
