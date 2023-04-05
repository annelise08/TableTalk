// this will have all of our middleware for getting and serving reccommendation details
const db = require('../models/reccsModels');
const express = require('express');

const reccController = {};

reccController.getReccs = (req, res, next) => {
    const getReccsQuery = `SELECT * FROM reccs`
    db.query(getReccsQuery)
    .then(data => {
        // console.log(data.rows)
        // store reccs (array of objects) in res.locals
        res.locals.reccs = data.rows;
        return next();
    })
    .catch(err => {
        return next({
            log: 'Error in getReccs controller',
            message: {err: err}
        })
    })
}

module.exports = reccController;