import React, { Component } from "react";
import Reccomendations from "../Reccomendations";
import NavBar from "../NavBar";

const Home = () => {
  // app should render reccomendations page
  return (
    <div>
      <NavBar />
      <h2 className="my-reccs">My restaurant reccomendations</h2>
      <Reccomendations />
    </div>
  );
}

export default Home;
