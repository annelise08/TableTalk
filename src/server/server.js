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
        res.status(200).send(res.locals.reccs)
})

app.post('/recc', (req, res) => {
    console.log(req.body)
    console.log('got a post request!')
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;