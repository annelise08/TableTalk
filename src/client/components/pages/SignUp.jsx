import React, { useEffect, useState } from "react";

export const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFullname = (e) => {
    const usernameTaken = document.getElementById("username-taken");
    usernameTaken.style.display = "none"
    setFullname(e.target.value);
  };

  const handleUsername = (e) => {
    const usernameTaken = document.getElementById("username-taken");
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
          const usernameTaken = document.getElementById("username-taken");
          usernameTaken.style.display = "inline"
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Welcome to TableTalk!</h1>
      <form action="">
        <input
          type="text"
          id="fullname"
          placeholder="Full name"
          onChange={handleFullname}
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleUsername}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <button onClick={handleSubmit}>Sign up</button>
      </form>
      <div id="username-taken">Username already exists.</div>
    </>
  );
};
