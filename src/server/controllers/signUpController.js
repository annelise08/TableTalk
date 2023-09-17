const db = require("../models/reccsModels");
const express = require("express");

const signUpController = {};

signUpController.signUp = (req, res, next) => {
  // get username, password, fullname from request body
  const { username, password, fullname } = req.body;
  let valuesArray = [username, password, fullname];
  const signUpUserQuery = `INSERT INTO users (username, password, full_name)
    VALUES ($1, $2, $3)`;

//   insert new user into database
  db.query(signUpUserQuery, valuesArray)
    .then((data) => {
      res.locals.usernameExists = false;
      return next();
    })
    .catch((err) => {
      // if username already exists, tell the user
      if (err.code == "23505") {
        res.locals.usernameExists = true;
        return next();
      }
     return next({
        log: "Error in sign up controller",
        message: { err: err },
      });
    });

};

module.exports = signUpController;
