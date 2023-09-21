// this will have all of our middleware for getting and serving reccommendation details
const db = require("../models/reccsModels");
const express = require("express");

const reccController = {};

// this controller gets all data from database
reccController.getReccs = (req, res, next) => {
  const {user} = req.params;
  const valuesArray = [user]

  // same deal here. I don't know why user has to be in quotes.
  const getReccsQuery = `SELECT * FROM reccs WHERE "user"=$1`;
  db.query(getReccsQuery, valuesArray)
    .then((data) => {
      console.log(data.rows)
      // store reccs (array of objects) in res.locals
      res.locals.reccs = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in getReccs controller",
        message: { err: err },
      });
    });
};

// this controller adds a new entry into the database
reccController.addRecc = (req, res, next) => {
  const { user, restaurant_name, fav_dishes, stars, notes, photo_name } = req.body;
  const valuesArray = [
    user,
    restaurant_name,
    fav_dishes,
    stars,
    notes,
    photo_name,
  ];

  // for some reason, user has to be in quotes. I don't know why.
  const insert = `INSERT INTO reccs("user", restaurant_name, fav_dishes, stars, notes, photo_name)
    VALUES($1, $2, $3, $4, $5, $6)`;

  db.query(insert, valuesArray)
    .then((res) => {
      return next();
    })
    .catch((error) => {
      return next({
        log: "Error in addRecc controller",
        message: { err: error },
      });
    });
};

reccController.deleteRecc = (req, res, next) => {
  const { restaurant_name } = req.body;
  const valuesArray = [restaurant_name];
  const remove = `DELETE FROM reccs WHERE restaurant_name=$1`;

  db.query(remove, valuesArray)
    .then((res) => {
      return next();
    })
    .catch((error) => {
      return next({
        log: "Error in deleteRecc controller",
        message: { err: error },
      });
    });
};

module.exports = reccController;
