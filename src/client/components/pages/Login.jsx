import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../state-management/AuthProvider";
import styles from '../../scss/login.module.scss';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();

  const navigate = useNavigate();

  // handleSubmit function for handling login
  const handleSubmit = (e) => {
    e.preventDefault();
    //  send a post request to backend with user's username and password
    fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((valid) => {
        // if the user/pw combination is valid, run the login function, otherwise, redirect to signup page
        // currently there is an error in the login function here
        if (valid) login(username);
        else navigate("/signup", { replace: true });
      })
      .catch((err) => console.log("Error connecting to server to sign in."));
  };

  // handle submit for signup button, redirect to signup page
  const handleSignUp = (e) => {
    navigate("/signup", { replace: true });
  };

  return (
    <>
      <div className="header-wrapper">
      <h1>TableTalk</h1>
      <h5>Restaurant reccomendations from people you know.</h5>
      </div>
      <div className="wrapper">
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="sign-in-button" onClick={handleSubmit}>Sign in</button>
      </form>
      <p>New here? <a href="http://localhost:8080/signup">Sign up</a></p>
      </div>
    </>
  );
};

export default LoginPage;
