const db = require("../models/reccsModels");
const express = require("express");

const signInController = {};

signInController.signIn = (req, res, next) => {
  // get username and password from request body
  const { username, password } = req.body;
  const valuesArray = [username, password];
  const getUserQuery = `SELECT *
    FROM users
    WHERE username=$1 AND password=$2`;

  db.query(getUserQuery, valuesArray)
    .then((data) => {
      // if user is verified, send "true" back to front end
      if (data.rows.length === 1) res.locals.verified = true;
      else res.locals.verified = false;
      // otherwise, send false back to front end
      return next();
    })
    .catch((err) => {
      next({
        log: "Error in sign in controller",
        message: { err: err },
      });
    });
};

module.exports = signInController;
