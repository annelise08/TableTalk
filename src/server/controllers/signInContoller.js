const db = require("../models/reccsModels");
const express = require("express");

const signInController = {};

signInController.signIn = (req, res, next) => {
    // get username and password from request body
  const { username, password } = req.body;
  const valuesArray = [username, password]
  const getUserQuery = `SELECT *
    FROM users
    WHERE username=$1 AND password=$2`;

    db.query(getUserQuery, valuesArray)
    .then(data => {
        console.log(data)
        return next();
    })
    .catch(err => {
        next({
            log: 'Error in sign in controller',
            message: {err: err}
        })
    })
};

module.exports = signInController;
