// this will have all server info (starting server, etc)
// added proxy server for /recc to localhost3000 so front end can talk to back end

const path = require("path");
const express = require("express");
const reccController = require("./controllers/reccController");
const signInController = require("./controllers/signInContoller");
const signUpController = require("./controllers/signUpController");

const app = express();

const PORT = 3000;

// handle parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get user's recommendations
app.get("/recc/:user", reccController.getReccs, (req, res) => {
  console.log("made it to server!");
  // send back array of objects
  res.status(200).send(res.locals.reccs);
});

app.post("/recc", reccController.addRecc, (req, res) => {
  // console.log('got a post request!')
  res.sendStatus(200);
});

// delete an entry
app.delete("/recc", reccController.deleteRecc, (req, res) => {
  res.sendStatus(200);
});

// sign in user
app.post("/api/signin", signInController.signIn, (req, res) => {
  res.status(200).send(res.locals.verified);
});

// sign up user
app.post("/api/signup", signUpController.signUp, (req, res) => {
  res.status(200).send(res.locals.usernameExists);
});

// default error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
