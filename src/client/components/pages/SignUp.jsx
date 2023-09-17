import React, { useEffect, useState } from "react";

export const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');

  const handleFullname = (e) => {
    setFullname(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    // send request to backend
  }

  return (
    <>
      <h1>Welcome to TableTalk!</h1>
      <form action="">
        <input type="text" id="fullname" placeholder="Full name" onChange={handleFullname}/>
        <input type="text" id="username" placeholder="Username" onChange={handleUsername}/>
        <input type="password" placeholder="Password" onChange={handlePassword}/>
        <button>Sign up</button>
      </form>
    </>
  );
};
