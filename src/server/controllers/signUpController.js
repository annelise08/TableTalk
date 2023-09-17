const db = require("../models/reccsModels");
const express = require("express");

const signUpController = {};

signUpController.signUp = (req, res, next) => {
  // get username, password, fullname from request body
  const { username, password, fullName } = req.body;
  // query database for username
  let valuesArray = [username, password, fullName];
  const signUpUserQuery = `INSERT INTO users (username, password, full_name)
    VALUES ($1, $2, $3)`;
  db.query(signUpUserQuery, valuesArray)
    .then((data) => {
      
    })
    .catch((err) => {
      next({
        log: "Error in sign up controller",
        message: { err: err },
      });
    });

};

module.exports = signUpController;
