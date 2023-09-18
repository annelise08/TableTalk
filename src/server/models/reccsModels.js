
require('dotenv').config()
const { Pool } = require("pg");

// got uri from elephant sql
const PG_URI = process.env.SQL_DB;

// create a new pool to connect database
const pool = new Pool({
  connectionString: PG_URI,
});

// Database contains a table 'reccs' with columns:
// _id, user_id, restaurant_name, fav_dishes, stars, notes, photo_name

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
