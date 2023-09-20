import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../state-management/AuthProvider";
import styles from '../../scss/login.module.scss';

export const SignUp = () => {
  // custom hooks for storing user's information
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // functions for protected routes, logging in user
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleFullname = (e) => {
    const usernameTaken = document.getElementById("usernameTaken");
    usernameTaken.style.display = "none"
    setFullname(e.target.value);
  };

  const handleUsername = (e) => {
    const usernameTaken = document.getElementById("usernameTaken");
    usernameTaken.style.display = "none"
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send request to backend
    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, fullname }),
    })
      .then((res) => res.json())
      .then((data) => {
        // true = user already exists in database, false = user does not exist in database
        // if user already exists, display "username taken"
        if (data == true) {
          const usernameTaken = document.getElementById("usernameTaken");
          usernameTaken.style.display = "inline"
        }
        // if user doesn't exist, sign up is complete, route to home page
        else if (data == false) login(username);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className={styles.headerWrapper}>
      <h1>TableTalk</h1>
      <h5 className={styles.headerTagline}>Welcome! Create your account</h5>
      </div>
      <div className={styles.wrapper}>
      <form className={styles.loginForm}>
        <input className={styles.inputUserText}
          type="text"
          id="fullname"
          placeholder="Full name"
          onChange={handleFullname}
        />
        <input className={styles.inputUserText}
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleUsername}
        />
        <div id="usernameTaken">Username already exists.</div>
        <input className={styles.inputUserText}
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <button className={styles.signInButton} onClick={handleSubmit}>Sign up</button>
      </form>
      </div>
    </>
  );
};
