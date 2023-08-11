import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // handleSubmit function for handling login
  const handleSubmit = (e) => {
   e.preventDefault(); 
  }

  return (
    <>
      <h1>TableTalk</h1>
      <form>
        <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </>
  );
};

export default Login;
