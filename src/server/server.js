// this will have all server info (starting server, etc)
// added proxy server for /recc to localhost3000 so front end can talk to back end

const path = require('path');
const express = require('express');
const reccController = require('./controllers/reccController');

const app = express();

const PORT = 3000;

// handle parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tried using path.resolve to serve files, not working
// app.get('/images', express.static(path.resolve('../images')))

// test get request is working
app.get('/recc',
    reccController.getReccs,
    (req, res) => {
        console.log('made it to server!')
        // send back array of objects
        // console.log(res.locals.reccs);
        res.status(200).send(res.locals.reccs)
})

app.post('/recc', reccController.addRecc, (req, res) => {
    // console.log('got a post request!')
    res.sendStatus(200);
})

// default error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;